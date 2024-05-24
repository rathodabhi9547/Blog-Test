//create router to handle user api 
const exp=require("express")
const userApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
//import bcryptjs for password hashing
const bcryptjs=require("bcryptjs");
//import jsonwebtoken to create token
const jwt=require("jsonwebtoken")
const verifyToken=require('./Middlewares/verifyToken')

require('dotenv').config()

//to extract body of request object
userApp.use(exp.json());

  
//Create REST API
//create '/getusers' path
userApp.get("/getusers", verifyToken,expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject=request.app.get("userCollectionObject")
    //getting all the users
    let users=await userCollectionObject.find().toArray()
    //send response
    response.send({message:"Users are..",payload:users})
}));
  

//create user login
userApp.post("/login",expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject")
    //get user credentials of object from client
    let userCredObj=request.body;
    //seacrh for user by using username
    let userDB=await userCollectionObject.findOne({username:userCredObj.username});
    //Username Not existed
    if (userDB==null) {
      response.send({message:"User is invalid.!! (or) Plzz SIGNUP first.!!"});
    }
    //Username Existed
    else {
      //comparing passwords
      let status=await bcryptjs.compare(userCredObj.pwd,userDB.pwd);
      //if pwds not matching then
      if (status==false) {
        response.send({message:"Password is invalid.!!"});
      }
      //if passwords are matching then
      else {
        //creating token
        let token = jwt.sign({ username:userDB.username},process.env.SECRET_KEY,{expiresIn:'12h'});
        //send response/token
        response.send({message:"successful",payload:token,userObj:userDB});
      }
    }
}));


  
//create 'new user'
userApp.post("/create-user",expressAsyncHandler(async(request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get userObject from client
    let newObj=request.body;
   // console.log(newObj);
    //seacrh for users by using username
    let userDB=await userCollectionObject.findOne({username:newObj.username})
    //if user is existed then
    if (userDB!==null) {
      response.send({message:"This username is available.!! Please choose another..!!"})
    }
    //if user is not existed then
    else {
      //hash password
      let hashedPassword = await bcryptjs.hash(newObj.pwd,6);
      //replace plain password with hashed password in newUserObject
      newObj.pwd = hashedPassword;
      //inserting newusers
      await userCollectionObject.insertOne(newObj)
      //send response
      response.send({ message:"New user has been created..."})
    }     
  
}));


  
//create update/modify user data
userApp.put("/update-user",expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //modify the user data
    let modifiedUser=request.body
    //update the users
    await userCollectionObject.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
    //send response
    response.send({message:'modified successfully.!!'})  
}));


  
//create delete user data by username
userApp.delete("/remove-user/:id",expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get username of user to remove
    let userID=(+request.params.id);
    //logic to delete the userID
    let deluser=await userCollectionObject.deleteOne({userID:userID})
    //send response
    if(deluser.deletedCount==1){
      response.send({message:"User has been deleted..",payload:userID})
    }
    else{
      response.send({message:"User is not deleted...",payload:userID})
    }
}));

//private route for testing
userApp.get('/test',verifyToken,(request,response)=>{
  response.send({message:"This reply is from private route"})
})

  
//export userApp...
module.exports=userApp;
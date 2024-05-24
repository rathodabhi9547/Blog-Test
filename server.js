//creating express app
const exp = require("express");
const app = exp();
const Rclient=require("mongodb").MongoClient;

require('dotenv').config()

//import path module
const path=require('path');

//connect build of react app with nodejs
app.use(exp.static(path.join(__dirname,'./build')))

app.use(exp.json());

//database connection URL
const DBurl=process.env.DATABASE_CONNECTION_URL;


//connect with mongodb server
Rclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let DBObj=client.db("RathodDB");

  //create collection objects
  let userCollectionObject=DBObj.collection("usercollection");
  let productCollectionObject=DBObj.collection("productcollection");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
  app.set("productCollectionObject",productCollectionObject);
  
  console.log("DB connection is successfully done..!!")
})
.catch(err=>console.log('Error in DB connection..',err))


//import userApp and productApp
const userApp = require("./APIS/userApi");
const productApp = require("./APIS/productApi");


//excute specific middleware 
app.use("/user-api", userApp);
app.use("/product-api", productApp);

//dealing with page refresh
app.use('*',(request,response)=>{
  response.sendFile(path.join(__dirname,'./build/index.html'))
})


//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});


//error handling using middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error is occurred", reason: `${error.message}` });
});

    

//assign port number
const port=process.env.PORT;
app.listen(port, () => console.log(`Web server listening on port number ${port}`));
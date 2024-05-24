//create router to handle product api 
const { request } = require('express');
const { response } = require('express');
const exp=require('express');
const productApp=exp.Router()
const expressAsyncHandler=require('express-async-handler')


//to extract body of request object
productApp.use(exp.json());


//get all products
productApp.get("/getproducts",expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    //read the products
    let products=await productCollectionObject.find().toArray()
    //send response
    response.send({message:"All products",payload:products})
}));
   

//get product by id
productApp.get("/getproducts/:id",expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    //get ID from url
    let PID=(+request.params.id);
    //get product by ID
    let products=await productCollectionObject.findOne({productID:PID});
    //product is not exist
    if(products==null){
        response.send({message:'product is not existed..'})
    }
    //product is exist
    else{
    response.send({message:'product is existed..',payload:products})
    }
}));
   


/*//create product using callbacks
productApp.post('/create-product',(request, response) => {

  //get productCollectionObject
  let productCollectionObject = request.app.get("productCollectionObject");
  
  //get product obj from req
  let productObj = request.body;

  //insert productObj
  productCollectionObject.insertOne(productObj,(err,result)=>{
      if(err){
          console.log("error is there in product...",err)
      }
      else{
          response.send({message:'Product is created successfully..'})
      }
  })
})

//create product using promise
productApp.post('/create-product',(request, response) => {

    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    
    //get product obj from req
    let productObj = request.body;
  
    //insert productObj
    productCollectionObject.insertOne(productObj)
    .then(result=>response.send({message:'product is created successfully..'}))
    .catch(err=>console.log("error is there in product..",err))
})*/


//create product using async and await
productApp.post('/create-product', expressAsyncHandler(async(request, response) => {
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    //get product obj from req
    let productObj = request.body;
    //insert productObj
    let result=await productCollectionObject.insertOne(productObj);
    //send response
    response.send({message:'product is created successfully.!!'});
}));


//update product
productApp.put('/update-product',expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    //get modified product obj
    let modifiedProduct=request.body;
    //update the products
    await productCollectionObject.updateOne({productID:modifiedProduct.productID},{$set:{...modifiedProduct}})
    //send response
    response.send({message:"Product is updated.."});
}));
  
  
//delete product by id
productApp.delete("/remove-product/:id",expressAsyncHandler(async(request,response)=>{
    //get productCollectionObject
    let productCollectionObject = request.app.get("productCollectionObject");
    //get id of products to remove
    let productID=(+request.params.id);
    //logic to delete products
    let delproduct=await productCollectionObject.deleteOne({productID:productID})
    if(delproduct.deletedCount==1){
    //send response
    response.send({message:"product is deleted..",payload:productID})
    }
    else{
    response.send({message:"product is not found..",payload:productID})
    }
}));


//export productApp
module.exports=productApp;
const { AsyncWrapper } = require("../MidleWare/AsyncWrapper");
const Products = require("../Models/products");

 const All_products = AsyncWrapper(async(req,res) => {
    const resp = await Products.find({})
    res.status(200).json({success : true , resp})
 })


 const ProductsByCategory = AsyncWrapper(async(req,res) => {
     const resp = await Products.aggregate([
      { $match : {} } ,
      { $group : { 
         _id : '$category' ,
         products: {$push : '$$ROOT'} ,
      
      }
       } , 
      {$project : { name : '$_id' , products: 1 , _id : 0}}
     ])
     res.status(200).json({success : true , resp})
 })



 module.exports = {
    All_products , ProductsByCategory
 };
 
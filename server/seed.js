const {faker} = require('@faker-js/faker');
const Products = require('./Models/products');
const ConnectToDataBase = require('./Database/config');
require('dotenv').config();
const _ = require('lodash');
const Category = require('./Models/category');





















const Start = async () => {
  try {
      await ConnectToDataBase(process.env.DATABASE ,console.log('connected to database'))
      
      let categories = ['breakfast' , 'lunch' , 'dinner' , 'drinks'].map((category) => { return { name : category} }) ;

      let imageUrls = [
          'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705786485/food%20app/dish2_wc7sky.png',
          'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705780483/dish1_kp2rii.png' ,
          'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705788131/dish3_go7vw4.png' ,

      ] 

      await Category.deleteMany()
      await Category.insertMany(categories)

      let products = [] ;
      for(let i = 0 ; i < 10 ; i++) {
        let newProduct = {
          name : faker.commerce.productName(),
          adjective : faker.commerce.productAdjective(),
          description : faker.commerce.productDescription() ,
          price : faker.commerce.price(),
          category : _.sample(categories) ,
          imageUrl:_.sample(imageUrls),  
        }
  products.push(newProduct)
}
       await Products.deleteMany()
       await Products.insertMany(products)
       process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    } 
}

Start()
const {faker} = require('@faker-js/faker');
const Products = require('./Models/products');
const ConnectToDataBase = require('./Database/config');
const Category = require('./Models/category');
require('dotenv').config();
const _ = require('lodash');






let categories = ['breakfast' , 'lunch' , 'dinner' , 'drinks'].map((category) => { return { name : category} })

let imageUrls = [
    'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705786485/food%20app/dish2_wc7sky.png',
    'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705780483/dish1_kp2rii.png' ,
    'https://res.cloudinary.com/dh8tvkqrq/image/upload/v1705788131/dish3_go7vw4.png' ,

] 



let products = [] ;
for(let i = 0 ; i < 10 ; i++) {
  let newProduct = {
    name : faker.ecommerce.productName(),
    adjective : faker.ecommerce.productAdjective(),
    desc : faker.ecommerce.productDesc() ,
    price : faker.ecommerce.price(),
    category : _.sample(categories) ,
    imageUrl:_.sample(imageUrls)  
  } ;
  products.push(newProduct)
}









const Start = async () => {
    try {
       await ConnectToDataBase(process.env.DATABASE ,console.log('connected to database'))
       await Products.deleteMany()
       await Products.create(products)
       await Category.insertMany(categories)
       process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

Start()
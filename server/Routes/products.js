const express = require('express');
const { All_products, ProductsByCategory } = require('../Controllers/products');
const router = express.Router()



router.route('/').get(All_products)
router.route('/products_by_category').get(ProductsByCategory)
  



module.exports = router ;

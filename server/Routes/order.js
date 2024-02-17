const express = require('express');
const { verfiytoken } = require('../Token/token');
const { Add_Address } = require('../Controllers/order');
const router = express.Router()



router.route('/order').post(verfiytoken,Add_Address)











module.exports=router;



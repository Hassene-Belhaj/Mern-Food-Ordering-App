const mongoose = require('mongoose'); 

var productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    adjective:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:String,
        required:true,
    },
    category : {
        type :  String ,
        required : true
    }

},{timestamps : true});

module.exports = mongoose.model('Products', productsSchema);
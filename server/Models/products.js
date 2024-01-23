const mongoose = require('mongoose'); 

var productsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    adjective:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    category : {
        name : {
            type :  String ,
            required : true
        },
    },
    imageUrl : {
      type : String
    }    

},{timestamps : true});

module.exports = mongoose.model('Products', productsSchema);
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    access_token : {
        type : String
    }
},{timeseries : true});

module.exports = mongoose.model('User', userSchema);
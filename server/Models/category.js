const mongoose = require('mongoose'); 

var categoriesSchema = new mongoose.Schema({
    ategory:{
        type:String,
    },

});

//Export the model
module.exports = mongoose.model('Categories', categoriesSchema);
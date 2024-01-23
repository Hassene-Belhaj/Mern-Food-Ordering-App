const mongoose = require('mongoose'); 

var categoriesSchema = new mongoose.Schema({
         name : {
             type: String ,
             required : true,                
            }
        },
        
        );

//Export the model
module.exports = mongoose.model('Categories', categoriesSchema);
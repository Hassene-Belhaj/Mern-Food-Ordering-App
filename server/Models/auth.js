const mongoose = require('mongoose');


let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];


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
    profile_img :{
        type: String,
        default: () => {
            return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`
        } 
    },
    address : {
        street_address: { type: String, required: false },
        city: { type: String, required: false },
        postalCode: { type: String, required: false  },
        country: { type: String, required: false , default : 'Tunisia' },
        state: { type: String, required: false },
    },
    order : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Order'
    }
},{timeseries : {createdAt : 'joinedAt'}});

module.exports = mongoose.model('User_auth', userSchema);
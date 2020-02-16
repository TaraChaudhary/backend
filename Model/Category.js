const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    categoryname:{
        type: String
    },
    description:{
        type: String
    },
   

})
const Category=mongoose.model('Category',userSchema)
module.exports=Category
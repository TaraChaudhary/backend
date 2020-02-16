const mongoose = require ('mongoose');
const jwt=require('jsonwebtoken');

const userSchema= new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
   
    image: {
        type: String
    }
})
const Signal=mongoose.model('Signal',userSchema)
module.exports=Signal
const mongoose=require('mongoose');

const Schema=mongoose.Schema
const userSchema=new Schema({
    name:String,
    lastName:String,
    userName:String,
    password:String,
    confirmPassword:String,
    state:String,
    city:String,
    postalCode:String
})

module.exports=mongoose.model('user',userSchema,'users')
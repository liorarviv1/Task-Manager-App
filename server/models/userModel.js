const mongoose=require('mongoose'); //מביאים את כל המידע מהדטה ביס

const userSchema=new mongoose.Schema({
    
    name:String,
    email:String,
    street:String,
    city:String,
    zipcode:Number,
    tasks:[
    {
        title:String,
        completed:Boolean,
        _id: false
    }],
    posts:[
    {
        title:String,
        body:String,
        _id: false

    }]
},{versionKey:false}
);
module.exports=mongoose.model("users",userSchema) //products זה השם של הטבלה בדטה ביס


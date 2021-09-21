const mongoose=require('mongoose')
const FormSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    rollno:String,
    group:String,
    file:Buffer,
})
module.exports=mongoose.model("Form",FormSchema)
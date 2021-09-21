const express=require('express')
const mongoose=require('mongoose')
const app=express();
const Form=require('./models/Form')
const bodyParser=require('body-parser')
const port=5000 

require('dotenv').config()

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology: true},()=>{
    console.log("mongoose todo database connected")
})
app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine","ejs")
app.get('/',async(req,res)=>{
    res.render('home')
})

app.post('/',async(req,res)=>{
    const form=new Form({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        rollno:req.body.rollno,
        group:req.body.group,
        file:req.body.file,
    })
    try {
        const save=await form.save();
        res.redirect('/')       
    } catch (error) {
        console.log(error)
    }
    
})
app.listen(port,
    (error)=>{
        if(!error){
            console.log(`http://localhost:${port}`)
        }
        else{
            console.log("Error connecting")
        }
})


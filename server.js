
const express=require('express');
const mongoose = require("mongoose");
const app=express();
const Patient=require('./models/patient');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const dbURI="mongodb+srv://aalhad:aalhad123@aalhad123.2dfdc.mongodb.net/project?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        console.log('connected to mongodb');
        app.listen(3000);
    })
    .catch((error)=>{
        console.log(error)
    })



app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile('html/home.html',{root:__dirname})
})
app.get('/signup',(req,res)=>{
    res.sendFile('html/signup.html',{root:__dirname})
})
app.get('/signin',(req,res)=>{
    res.sendFile('html/signin.html',{root:__dirname})
})

app.post('/signup',(async (req, res) => {
    console.log(req.body);
    // const pat =new Patient({
    //     email: req.body.email,
    //     password: req.body.pass1,
    //     name: req.body.name,
    //     phone: req.body.phno,
    //     dob: req.body.dob,
    //     adhar: req.body.adno,
    //     gender: req.body.gender,
    //     allergies: req.body.allergies,
    //     medicalhistory: req.body.history
    //
    // });
    // pat.save()
    //     .then((result)=>{
    //         res.send(result);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     });
    await Patient.insertMany([{
        email: req.body.email,
        password: req.body.pass1,
        name: req.body.name,
        phone: req.body.phno,
        dob: req.body.dob,
        adhar: req.body.adno,
        gender: req.body.gender,
        allergies: req.body.allergies,
        medicalhistory: req.body.history

    }]);


    res.json({status:"working"});
}))
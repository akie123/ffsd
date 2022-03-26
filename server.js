const express=require('express');
const mongoose = require("mongoose");
const app=express();
const cookieParser = require('cookie-parser');
app.set('view engine','ejs');
const Patient=require('./models/patient');
const Doctor=require('./models/doctor');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

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
    res.sendFile('views/home.html',{root:__dirname})
})
app.get('/signup',(req,res)=>{
    res.sendFile('views/signup.html',{root:__dirname})
})
app.get('/signupd',(req,res)=>{
    res.sendFile('views/signup.html',{root:__dirname})
})
app.get('/signin',(req,res)=>{
    res.sendFile('views/signin.html',{root:__dirname})
})

app.get('/patientportal',(req,res)=>{
    // res.sendFile('views/patientportal.ejs',{root:__dirname})

    Doctor.find({},(err,data)=>{

      Patient.findOne({id:req.cookies.id},(err1,data1)=>{
          res.render('patientPortal',{data:data,pdata:data1})
      })


    })



})

app.post('/signup',(async (req, res) => {

    console.log(req.body);

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

    }])



    res.json({status:"working"});
}))
app.post('/signupd',(async (req, res) => {
    console.log(req.body);

    await Doctor.insertMany([{
        email: req.body.email,
        password: req.body.pass1,
        name: req.body.name,
        phone: req.body.phno,
        dob: req.body.dob,
        gender: req.body.gender,
        adhar: req.body.adhar,
        qualification: req.body.qualification,
        department:req.body.department,
        experience:req.body.experience



    }])


    res.json({status:"working"});
}))
app.post('/signin',(async (req,res)=>{

    console.log((req.body));
    res.clearCookie('id');
    // res.json({status:"working"})

   let data={
       email: req.body.email,
       password:req.body.password
   }

   // Patient.find({},function (err,user){
   //     console.log(user)
   // })

    Patient.findOne(data, function(err, user) {
        if (err) {
            res.json({
                status: 0,
                message: err
            });
        }
        else if (!user) {
            console.log('na')
            res.json({
                status: 0,
                message: "not found"
            });

        }
        else{

        res.cookie('id',user._id);

        res.json({
            status: 1,
            id: user._id,
            message: "success"
        });

        };
    })



}))

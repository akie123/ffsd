const express=require('express');
const mongoose = require("mongoose");
const app=express();
const cookieParser = require('cookie-parser');
const moment = require('moment');
app.set('view engine','ejs');
const Patient=require('./models/patient');
const Doctor=require('./models/doctor');
const Shedule=require('./models/shedule');
const available= require('./models/docAvaliable');
const pastApt=require('./models/pastApt');
let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aalhad.a20@iiits.in',
        pass: 'Jaysairaj@1'
    }
});
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
app.get('/forget',(req,res)=>{
    res.sendFile('views/forget.html',{root:__dirname})
})
app.get('/admin',(req,res)=>{
    res.sendFile('views/admin.html',{root:__dirname})
})
app.post('/forget',async (req,res)=>{
console.log(req.body)
  Patient.findOne({email:req.body.email}, function(err, user) {
      if (err) {
          res.json({
              status: 0,
              message: err
          });
      }
      else if(user){

         let mailOptions = {
              from: 'aalhad.a20@iiits.in',
              to: req.body.email,
              subject: 'Your Password',
              text: "Your Password: "+ user.password
          };

          transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                  console.log(error);
                  res.json({
                      status: 0,
                      id: user._id,
                      message: "failed"
                  });
              } else {
                  console.log('Email sent: ' + info.response);
                  res.json({
                      status: 1,
                      id: user._id,
                      message: "success"
                  });
              }
          });


      }
      else
      {
          Doctor.findOne({email:req.body.email},function (err1,user1){
              if(err1){
                  res.json({
                      status: 0,
                      message: err1
                  });
              }
              else if(!user1)
              {
                  console.log('na')
                  res.json({
                      status: 0,
                      message: "not found"
                  });
              }
              else {

                  let mailOptions = {
                      from: 'aalhad.a20@iiits.in',
                      to: req.body.email,
                      subject: 'Your Password',
                      text: user.password
                  };

                  transporter.sendMail(mailOptions, function(error, info){
                      if (error) {
                          console.log(error);
                      } else {
                          console.log('Email sent: ' + info.response);
                      }
                  });
                  res.json({
                      status: 1,
                      id: user1._id,
                      message: "successD"
                  });

              }
          })
      }


  })







})
app.get('/signup',(req,res)=>{
    res.sendFile('views/signup.html',{root:__dirname})
})
app.get('/signupd',(req,res)=>{
    res.sendFile('views/signupd.html',{root:__dirname})
})
app.get('/signin',(req,res)=>{
    res.sendFile('views/signin.html',{root:__dirname})
})
app.get('/doctorportal',(req,res)=>{


    Shedule.find({id: req.cookies.Did},(err,data1)=>{
       console.log(data1)
        Doctor.findOne({_id: req.cookies.Did}, (err, data) => {
            res.render('doctorPortal', {data: data,data1: data1,moment: moment })
        })
    }).sort({slot :'asc'})




})


app.get('/patientportal',(req,res)=>{

pastApt.find({idp:req.cookies.id},(err2,data3)=>{
    Doctor.find({},(err,data)=>{

        Patient.findOne({_id:req.cookies.id},(err1,data1)=>{
            res.render('patientPortal',{data:data,pdata:data1,past:data3})
        })


    })
})




})
app.post('/doctorportal',(async (req ,res)=>{


      if(req.body.flag=='info')
      {
          console.log(req.body)
          let up={

              password: req.body.pass1,
              name: req.body.name,
              phone: req.body.phno,
              dob: req.body.dob,
              gender: req.body.gender,
              adhar: req.body.adhar,
              qualification: req.body.qualification,
              department:req.body.department,
              experience:req.body.experience

          }
          Doctor.findByIdAndUpdate(req.cookies.Did,up,(err,data)=>{
              if (err){
                  console.log(err)
              }
              else{
                  console.log("Updated User : ", data);
              }
          })

          res.json({status:"updated"});
      }
      if(req.body.flag=='slot')
      {
        await Shedule.insertMany([{
          id: req.cookies.Did,
          slot:req.body.slot
        }])
          await available.insertMany([{
              idd:req.cookies.Did,
              idp: "",
              slot:req.body.slot,
              available:'false',
              date: new Date()

          }])
          res.json({status:"slot"});
      }
    if(req.body.flag=='del')
    {
        console.log(req.body)
        await Shedule.findOneAndDelete([{
            id: req.cookies.Did,
            slot:req.body.slot
        }])
        res.json({status:"del"});
    }


}))
app.post('/patientportal',(async (req ,res)=>{


      if(req.body.flag=='info')
      {
          console.log(req.body)
          let up={


            password: req.body.pass1,
            name: req.body.name,
            phone: req.body.phno,
            dob: req.body.dob,
            adhar: req.body.adno,
            gender: req.body.gender,


          }
          Patient.findByIdAndUpdate(req.cookies.id,up,(err,data)=>{
              if (err){
                  console.log(err)
              }
              else{
                  console.log("Updated User : ", data);
              }
          })

          res.json({status:"updated"});
      }
      else if(req.body.flag=='ok')
    {

        console.log(req.body)
         available.findOneAndUpdate({idd:req.body.docid,slot:req.body.slot,available:'false'},{idp:req.cookies.id,date:new Date(),available:'true'},null,async(err,doc)=>{

             if(doc)
             {

                await pastApt.insertMany([{
                    idd:req.body.docid,
                    idp:req.cookies.id,
                    date:new Date(),
                    slot:req.body.slot,
                    status:'true'

                }])
                 res.json({status:"ok"});

             }
             else {
                 available.findOne({idd:req.body.docid,slot:req.body.slot,available:'true'},async(err,res1)=>{
                     if(res1){

                         if(res1.date.getDate()!=new Date().getDate()) {
                             available.updateOne({idd:req.body.docid,slot:req.body.slot},{idp:req.cookies.id,date:new Date(),available:'true'},null,async(er1,da1)=>{

                                 if(da1)
                                 {
                                     await pastApt.insertMany([{
                                         idd:req.body.docid,
                                         idp:req.cookies.id,
                                         date:new Date(),
                                         slot:req.body.slot,
                                         status:'true'

                                     }])
                                     res.json({status:"ok"});
                                 }

                             })
                         }
                         else
                         {
                             res.json({status:"no"});
                         }

                     }
                     else
                     {
                         res.json({status:"no"});
                     }
                 })
             }
         })





    }



}))

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
    res.clearCookie('Did');
    // res.json({status:"working"})

   let data={
       email: req.body.email,
       password:req.body.password
   }

   // Patient.find({},function (err,user){
   //     console.log(user)
   // })
let to=0;
    Patient.findOne(data, function(err, user) {
        if (err) {
            res.json({
                status: 0,
                message: err
            });
        }
        else if(user){

        res.cookie('id',user._id);

        res.json({
            status: 1,
            id: user._id,
            message: "success"
        });

        }
        else
        {
            Doctor.findOne(data,function (err1,user1){
                if(err1){
                    res.json({
                        status: 0,
                        message: err1
                    });
                }
                else if(!user1)
                {
                    console.log('na')
                    res.json({
                        status: 0,
                        message: "not found"
                    });
                }
                else {
                    res.cookie('Did',user1._id);

                    res.json({
                        status: 1,
                        id: user1._id,
                        message: "successD"
                    });

                }
            })
        }


    })

}))

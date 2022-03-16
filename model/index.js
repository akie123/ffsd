const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-Clinc', {useNewUrlParser:true} ,(error) => {

  if (!error) {
    console.log("success connected!!");
  } else {
    console.log("failed");
  }

});
const patient= require('./patient.model');

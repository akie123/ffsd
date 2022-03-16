let flap=0;
let emailValue;
let passwordValue;
let passwordValuere;

function ValidateEmail(x)
{

  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
    return false;
    }
    return true;
}
document.getElementById("bu").addEventListener("click", function() {
    document.getElementById("body-1").style.display = "none";
    document.getElementById("body-2").style.display = "block";
})

document.getElementById("but1").addEventListener("click", function() {
    document.getElementById("body-1").style.display = "none";
    document.getElementById("body-2").style.display = "block";
    flap=1;
})


document.getElementById("but2").addEventListener("click", function() {

  emailValue=document.getElementById('email-1').value;
  passwordValue=document.getElementById('pass-1').value;
  passwordValuere=document.getElementById('pass-2').value;
  let validate=ValidateEmail(emailValue);
  let check=true;
  let dig=0,bigChar=0,smallChar=0,notRequired=0;
  let n=passwordValue.length;
  for(let i=0;i<n;i++)
  {
  if(passwordValue[i]>='0'&&passwordValue[i]<='9')
  {
  dig++;
  }
  else if(passwordValue[i]>='a'&&passwordValue[i]<='z')
  {
  smallChar++;
  }
  else if(passwordValue[i]>='A'&&passwordValue[i]<='Z')
  {
  bigChar++;
  }
  else{
  notRequired++;
  }

  }
  let error=false;
  if(emailValue=='')
  {
    alert("No email value specified");
    error=true;


  }
  else if(validate==false)
  {
    alert("Invalid EmailId");
    error=true;
  }
  else if(passwordValue=='')
  {
    alert("No password value specified");
    error=true;
  }
  else if(passwordValue!=passwordValuere)
  {
    alert("password din't match");
    error=true;
  }
  else if(dig==0||smallChar==0||bigChar==0||notRequired>0)
  {
    alert("password constrain din't satisfy! try other one");
    error=true;
  }

  if(error)
  {
    document.getElementById('email-1').value='';
    document.getElementById('pass-1').value='';
    document.getElementById('pass-2').value='';

  }
  else{

    if(flap==0)
    {


    document.getElementById("body-2").style.display = "none";
    document.getElementById("body-3").style.display = "block";
    }
    else{
        document.getElementById("body-2").style.display = "none";
        document.getElementById("body-4").style.display = "block";
    }
  }


})
document.getElementById("but-3").addEventListener("click", function() {

   document.getElementById("body-3").style.display = "none";
   document.getElementById("body-5").style.display = "block";


})

document.getElementById("but-4").addEventListener("click", function() {

   document.getElementById("body-4").style.display = "none";
   document.getElementById("body-6").style.display = "block";


})
//
// const connecton =require('./model');
// const express =require('express');
// const application=express();
// const path=require('path');
//  const expressHandlerBars=require('express-handlebars');
// const bodyparser=require('body-parser');
// 
// application.use(bodyparser.urlencoded({
//   extended:true
// }));
//
// application.get("/",(req,res)=>{
//   res.send('hello')
// })
//
// application.listen("3000",()=>{
//   console.log("server success");
// })

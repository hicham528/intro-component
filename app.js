let first_name=document.getElementById("first_name");
let last_name=document.getElementById("last_name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let send_btn=document.querySelector(".send_btn");
let error=document.querySelectorAll(".error")
let error_img=document.querySelectorAll(".error_img");
//validation input=========
const namePattern = /^[a-zA-Z\s'-]+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//click to send 
send_btn.onclick=()=>{
if(!namePattern.test(first_name.value) || first_name.value==""){
  error_img[0].style.display="block";
  error[0].innerHTML="You have a fault in your input"
}else{
  error_img[0].style.display="none";
  error[0].innerHTML=""
}


if(last_name.value=="" || !namePattern.test(last_name.value)){
   error_img[1].style.display="block";
  error[1].innerHTML="You have a fault in your input"
}else{
  error_img[1].style.display="none";
  error[1].innerHTML=""
}

if(email.value=="" ||!emailPattern.test(email.value)){
  error_img[2].style.display="block";
  error[2].innerHTML="Please enter a valid email address"
}else{
  error_img[2].style.display="none";
  error[2].innerHTML=""
}

if(password.value=="" || !passwordPattern.test(password.value)){
  error_img[3].style.display="block";
  error[3].innerHTML="Password must be 6 to 20 characters, contain at least one numeric digit, one uppercase and one lowercase letter"
}else{
  error_img[3].style.display="none";
  error[3].innerHTML=""
}


first_name.value="";
last_name.value="";
email.value="";
password.value="";
}
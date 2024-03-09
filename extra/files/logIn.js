const button1 = document.getElementById("btn1");
const talk = document.getElementById("speech");
const len = document.getElementById("pas-len");
let speech;

button1.onclick = function logIn(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email !== "" && password != "" && password.length >= 6){
        window.location.href = "mainPageA.html";
    }
    else if(email !== "" && password != "" && password.length < 6){
        speech = "يجب أن تكون كلمة المرور مكونة من 6 ارقام أو أكثر"
        len.textContent = speech;
    }
    else if(email === "" && password != ""){
        speech = "الرجاء ملء خانة البريد الإتكتروني";
        talk.textContent = speech;
    }
    else if(email !== "" && password == ""){
        speech = "الرجاء ملء خانة كلمة المرور";
        talk.textContent = speech;
    }
    else{
        speech = "الرجاء ملء خانة البريد الإتكتروني";
        talk.textContent = speech;
    }
}
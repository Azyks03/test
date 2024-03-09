const warning = document.getElementById("warning");
const buy = document.getElementById("buy");
let tell = "الرجاء التأكد من أن خانتا درجة المقعد و البريد الإلكتروني ممتلئتان باالمعلومات الصحيحة";

buy.onclick = function(){
    const economy = document.getElementById("economy");
    const business = document.getElementById("business");
    const first = document.getElementById("first");
    const email = document.getElementById("email").value;

    if(economy.checked && email !== ""){
        window.location.href = "endA.html";
    }
    else if(business.checked && email !== ""){
        window.location.href = "endA.html";
    }
    else if(first.checked && email !== ""){
        window.location.href = "endA.html";
    }
    else{
        warning.textContent = tell;
    }
}
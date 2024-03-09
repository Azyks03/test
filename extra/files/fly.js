const warning = document.getElementById("warning");
const buy = document.getElementById("buy");
let tell = "Please make sure that the Seat Class section and the Email section are filled properly";

buy.onclick = function(){
    const economy = document.getElementById("economy");
    const business = document.getElementById("business");
    const first = document.getElementById("first");
    const email = document.getElementById("email").value;

    if(economy.checked && email !== ""){
        window.location.href = "end.html";
    }
    else if(business.checked && email !== ""){
        window.location.href = "end.html";
    }
    else if(first.checked && email !== ""){
        window.location.href = "end.html";
    }
    else{
        warning.textContent = tell;
    }
}
const alex = document.getElementById("travel1");
const luxor = document.getElementById("travel2");
const giza = document.getElementById("travel3");
const aswan = document.getElementById("travel4");
const cairo = document.getElementById("travel5");
const visit = document.getElementById("visited");
let a = sessionStorage.getItem("a") ? parseInt(sessionStorage.getItem("a")) : 1;
let b = sessionStorage.getItem("b") ? parseInt(sessionStorage.getItem("b")) : 1;
let x = sessionStorage.getItem("x") ? parseInt(sessionStorage.getItem("x")) : 1;
let y = sessionStorage.getItem("y") ? parseInt(sessionStorage.getItem("y")) : 1;
let z = sessionStorage.getItem("z") ? parseInt(sessionStorage.getItem("z")) : 1;
let display;

alex.onclick = function(){
    sessionStorage.setItem("a", a + 1);
    window.location.href = "flyAalexandria.html";
}

luxor.onclick = function(){
    sessionStorage.setItem("b", b + 1);
    window.location.href = "flyAluxor.html";
}

giza.onclick = function(){
    sessionStorage.setItem("x", x + 1);
    window.location.href = "flyAgiza.html";
}

aswan.onclick = function(){
    sessionStorage.setItem("y", y + 1);
    window.location.href = "flyAaswan.html";
}

cairo.onclick = function(){
    sessionStorage.setItem("z", z + 1);
    window.location.href = "flyAcairo.html";
}

if(a > b && a > x && a > y && a > z){
    display = "مشهور حاليا: الإسكندرية";
    visit.textContent = display;
}
else if(b > a && b > x && b > y && b > z){
    display = "مشهور حاليا: الأقصر";
    visit.textContent = display;
}
else if(x > a && x > b && x > y && x > z){
    display = "مشهور حاليا: الجيزة";
    visit.textContent = display;
}
else if(y > a && y > b && y > x && y > z){
    display = "مشهور حاليا: أسوان";
    visit.textContent = display;
}
else if(z > a && z > b && z > x && z > y){
    display = "مشهور حاليا: القاهرة";
    visit.textContent = display;
}

setInterval(() => {
    let i = Math.floor(Math.random() * 5 + 1);

    if (i === 1) {
        sessionStorage.setItem("a", parseInt(sessionStorage.getItem("a") || 0) + 1);
    } else if (i === 2) {
        sessionStorage.setItem("b", parseInt(sessionStorage.getItem("b") || 0) + 1);
    } else if (i === 3) {
        sessionStorage.setItem("x", parseInt(sessionStorage.getItem("x") || 0) + 1);
    } else if (i === 4) {
        sessionStorage.setItem("y", parseInt(sessionStorage.getItem("y") || 0) + 1);
    } else {
        sessionStorage.setItem("z", parseInt(sessionStorage.getItem("z") || 0) + 1);
    }
}, 5000);

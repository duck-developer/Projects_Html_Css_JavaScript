/*==== VARIAVEIS DO MENU ====*/
var nav_open = document.querySelector(".nav_open");
var close = document.querySelector(".close");
var navbar = document.querySelector(".navbar");

/*==== VARIAVEIS DO ROLAGEM ====*/
var button = document.querySelector(".page");
var allPage = document.querySelector(".allPage");

var button2 = document.querySelector(".but2");


/*==== MENU ====*/
nav_open.addEventListener("click", ()=>{
    navbar.style.display ="block";
})
close.addEventListener("click", ()=>{
    navbar.style.display = "none";
})

/*==== ROLAGEM ====*/
button.addEventListener("click", ()=>{
    allPage.style.left="-100vw"
    
})
button2.addEventListener("click", ()=>{
    allPage.style.left="0vw"
    
})




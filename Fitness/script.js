var nav=document.querySelector("nav")
var menu=document.querySelector(".fa-bars")
var Xa=document.querySelector(".Xa")

menu.addEventListener("click", clicar)
Xa.addEventListener("click", click)

Xa.style.display="none"
function clicar(){
    nav.classList.toggle("nav-toggle")
    Xa.style.display="block"
    menu.style.display="none"

}

function click(){
    nav.classList.toggle("nav-toggle")
    menu.style.display="block"
    Xa.style.display="none"
    
}
/==== SCROLL ====/
const he=document.querySelector("header")
window.addEventListener('scroll',rolar)

function rolar(){
    if(window.scrollY>120){
        he.classList.add("activeScrol")
    }else{
        he.classList.remove("activeScrol")
    }
}
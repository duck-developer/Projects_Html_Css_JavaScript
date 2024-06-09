var body = document.querySelector("body");
var tit = document.querySelector(".tit");
var btn1 = document.querySelector(".btn_1");
var btn2 = document.querySelector(".btn_2")
var adida = document.querySelector(".adidas")
var dinheiro =  document.querySelector(".dinheiro");
var img = document.querySelector("img");
var xa =  document.querySelector(".xa");
var xb =  document.querySelector(".xb");
var xc =  document.querySelector(".xc");
var xd =  document.querySelector(".xd");
var xe =  document.querySelector(".xe");
var co = document.querySelectorAll(".co");


var red = document.querySelector(".red");
var green = document.querySelector(".green");
var blue  = document.querySelector(".blue");
var black = document.querySelector(".black");
var blue_2 = document.querySelector(".blue_2");

green.addEventListener("click", verde)
red.addEventListener("click", vermelho)
blue.addEventListener("click", azul)
black.addEventListener("click", preto)
blue_2.addEventListener("click", psg)



co.forEach((items, index)=>{
    items.addEventListener("click" ,()=>{
        co.forEach(remove=>{
            remove.classList.remove("active")
        })
        items.classList.add("active")
    })
})


function verde(){
    body.style.backgroundImage = "url('image/wp3716775.jpg')"
    tit.innerHTML = "Palmeiras"
    dinheiro.innerHTML ="$10.99"
    dinheiro.style.color ="green"
    xa.style.color ="green"
    xb.style.color ="green"
    xc.style.color ="white"
    xd.style.color ="green"
    xe.style.color ="green"
    xc.style.background ="green"
    btn1.style.background ="green"
    btn2.style.background ="green"
    adida.innerHTML="Puma Palmeiras"
    img.setAttribute('src', 'image/camisa-do-palmeiras-i-21-puma-masculina-img-removebg-preview.png')
    img.style.right="-10px"
    img.style.top="20px"
}
function vermelho(){
    body.style.backgroundImage = "url('image/ae6abc8f7e6207434a22702a1de49be3.jpg')"
    tit.innerHTML = "Flamengo"
    dinheiro.innerHTML ="$29.99"
    dinheiro.style.color ="red"
    xa.style.color ="red"
    xb.style.color ="red"
    xc.style.color ="white"
    xd.style.color ="red"
    xe.style.color ="red"
    xc.style.background ="red"
    btn1.style.background ="red"
    btn2.style.background ="red"
    adida.innerHTML="Adidas Flamengo"
    img.setAttribute('src', 'image/camisa-do-flamengo.png')
    img.style.right="140px"
    img.style.top="20px"
}
function azul(){
    body.style.backgroundImage = "url('image/EllenAllmye_2012_background19_gremio.jpg')"
    tit.innerHTML = "Grêmio"
    dinheiro.innerHTML ="$8.99"
    dinheiro.style.color ="#2EBBFF"
    xa.style.color ="#2EBBFF"
    xb.style.color ="#2EBBFF"
    xc.style.color ="white"
    xd.style.color ="#2EBBFF"
    xe.style.color ="#2EBBFF"
    xc.style.background ="#2EBBFF"
    btn1.style.background ="#2EBBFF"
    btn2.style.background ="#2EBBFF"
    adida.innerHTML="Umbro Gremio"
    img.setAttribute('src', 'image/e52fcd3836e9e12ffb2ce9ea71c8b9cc-removebg-preview.png')
    img.style.right="-5px"
    img.style.top="20px"
}

function preto(){
    body.style.backgroundImage = "url('image/985259.jpg')"
    tit.innerHTML = "Corinthians"
    dinheiro.innerHTML ="$8.99"
    dinheiro.style.color ="black"
    xa.style.color ="black"
    xb.style.color ="black"
    xc.style.color ="white"
    xd.style.color ="black"
    xe.style.color ="black"
    xc.style.background ="black"
    btn1.style.background ="black"
    btn2.style.background ="black"
    adida.innerHTML="Nike Corinthians"
    img.setAttribute('src', 'image/2IC-3233-026_zoom3-removebg-preview.png')
    img.style.right="-5px"
    img.style.top="10px"
}
function psg(){
    body.style.backgroundImage = "url('image/paris-pc11-1024x653.jpg')"
    tit.innerHTML = "PSG"
    dinheiro.innerHTML ="$40.99"
    dinheiro.style.color ="#00325D"
    xa.style.color ="#00325D"
    xb.style.color ="#00325D"
    xc.style.color ="white"
    xd.style.color ="#00325D"
    xe.style.color ="#00325D"
    xc.style.background ="#00325D"
    btn1.style.background ="#00325D"
    btn2.style.background ="#00325D"
    adida.innerHTML="Jordan Paris Saint Germain"
    img.setAttribute('src', 'image/camiseta-paris-saint-germain-psg-messi-personalizada-c-nome-camiseta-futebol-removebg-preview.png')
    img.style.right="-5px"
    img.style.top="10px"
}
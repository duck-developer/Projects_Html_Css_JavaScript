/*==== HEADER SCROLL ====*/
function scrollHeader(){
  const header = document.getElementById('header')

  if(this.scrollY>=50){
    header.classList.add('scroll-header')
  }else{
    header.classList.remove('scroll-header')
    
  }
  
}
window.addEventListener('scroll', scrollHeader)



/*====ELEMENTES ACTIVE ====*/
var active_link=document.querySelectorAll(".nav_item a")
active_link.forEach((items, index)=>{
  items.addEventListener("click",()=>{
    active_link.forEach(remove=>{
      remove.classList.remove("active_link")
    })
    items.classList.add("active_link")
  })
})



/*==== SWIPER SLIDE ====*/
let swiperTest=new Swiper(".arts_container",{
  spaceBetween:24,
  loop:true,
  grabCursor:true,
  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
/*==== GALLERY ====*/
var home=document.querySelectorAll(".vid")
home.forEach((items, index)=>{
  items.addEventListener("click",()=>{
    home.forEach(remove=>{
      remove.classList.remove("active")
    })
    items.classList.add("active")
  })
})


var video=document.querySelector(".vid_home")
var video_01= document.querySelector(".video_01")
var video_02= document.querySelector(".video_02")
var video_03= document.querySelector(".video_03")
var video_04= document.querySelector(".video_04")
var video_05= document.querySelector(".video_05")
var video_06= document.querySelector(".video_06")
var video_07= document.querySelector(".video_07")
var text=document.querySelector("._home")



video_01.addEventListener("click",video_1)
function video_1(){
  video.setAttribute("src","video/video_01/y2meta.com-N quero dicas - Smzinho (ANIMAÇÃO)-(1080p).mp4")
  text.innerHTML="01. Não Quero Dicas - Smzinho"
}

video_02.addEventListener("click",video_2)
function video_2(){
  video.setAttribute("src","video/video_02/y2meta.com-SMZINHO COMUNISTA!! -  Fall Guys-(1080p).mp4")
  text.innerHTML="02. COMUNISTA!! - Smzinho"
}

video_03.addEventListener("click",video_3)
function video_3(){
  video.setAttribute("src","video/video_03/y2meta.com-BEBADO NA GUERRA (ANIMAÇÃO)-(1080p).mp4")
  text.innerHTML="03. BEBADO NA GUERRA - Smzinho"
}

video_04.addEventListener("click",video_4)
function video_4(){
  video.setAttribute("src","video/video_04/y2meta.com-UM TIME PERDIDO NA GUERRA (ANIMAÇÃO)-(1080p).mp4")
  text.innerHTML="04. UM TIME PERDIDO NA GUERRA - Smzinho"
}
video_05.addEventListener("click",video_5)
function video_5(){
  video.setAttribute("src","video/video_05/y2meta.com-O CABA LÁ (ANIMAÇÃO)-(1080p).mp4")
  text.innerHTML="05. O CABA LÁ - Smzinho"
}
video_06.addEventListener("click",video_6)
function video_6(){
  video.setAttribute("src","video/video_06/x2mate.com-OS IMUNDOS SUPER LASTIMÁVEIS (ANIMAÇÃO).mp4")
  text.innerHTML="06.  OS IMUNDOS SUPER LASTIMÁVEIS - Smzinho"
}
video_07.addEventListener("click",video_7)
function video_7(){
  video.setAttribute("src","video/video_07/x2mate.com-INSIDE US (ANIMAÇÃO AMONG US).mp4")
  text.innerHTML="07. INSIDE US - Smzinho"
}

/*==== SCROLL REVEAL ====*/
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})
sr.reveal(`.home_data`)
sr.reveal(`.home_handle`,{delay:700})
sr.reveal(`.home_social, .home_scroll`,{delay:900, origin:'bottom'})
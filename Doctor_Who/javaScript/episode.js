/*==== VAR EPISODE ====*/

var page_btn = document.querySelectorAll(".page_btn");
var ep = document.querySelector("#ep");


/*==== EPISODE ====*/
page_btn.forEach((pag_items, pag_index)=>{
    pag_items.addEventListener("click", ()=>{
        page_btn.forEach(pag_remove=>{
            pag_remove.classList.remove("active_page");
        })
        
        pag_items.classList.add("active_page");
        ep.style.left=-(pag_index * 100) +"vw"
    })
})


/* FECHAR O VIDEO */
var video = document.getElementById("assitir")
const icone = document.getElementById("desability")


const link = document.querySelector("video")
function active(){
   video.classList.add("active_doctor")
   link.pause()

}

function episode1(){
    video.classList.remove("active_doctor")
    link.setAttribute("src","episodes/episodio 1/3EP02.mp4") 
}

function episode2(){
    video.classList.remove("active_doctor")
    link.setAttribute("src","episodes/episodio 2/3EP10.mp4") 
}
function episode3(){
    video.classList.remove("active_doctor")
    link.setAttribute("src","episodes/episodio 3/4EP08.mp4") 
}
function episode4(){
    video.classList.remove("active_doctor")
    link.setAttribute("src","episodes/episodio 4/5EP10.mp4") 
}
function episode5(){
    video.classList.remove("active_doctor")
    link.setAttribute("src","episodes/episodio 5/9EP11.mp4") 
}


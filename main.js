const headerlinks=document.getElementsByClassName("a")
const hamburger=document.getElementById("hamburger")
const closeBtn=document.getElementById("closeBtn")
const nav=document.getElementsByClassName("nav")
const openedNav=document.getElementById("openedNav")


for(let i=0;i<headerlinks.length;i++){
   
headerlinks[i].addEventListener("click",()=>{
    for(let i=0;i<headerlinks.length;i++){
    headerlinks[i].classList.remove("active")
     }
    headerlinks[i].classList.add("active")
})
}

hamburger.addEventListener("click",(e)=>{
    e.preventDefault()
    hamburger.classList.remove("on")
    hamburger.classList.add("off")
    nav[0].style.right="0"

})

closeBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    hamburger.classList.remove("off")
    hamburger.classList.add("on")
    nav[0].style.right="-20rem"

})



// window.addEventListener("scroll",(e)=>{
// if(window.scrollY>600){
//     for(let i=0;i<headerlinks.length;i++){
//         headerlinks[i].classList.remove("active")
//          }
//          headerlinks[2].classList.add("active")

// }

// if(window.scrollY>900){
//     for(let i=0;i<headerlinks.length;i++){
//         headerlinks[i].classList.remove("active")
//          }
//          headerlinks[1].classList.add("active")

// }





// if(window.scrollY<200){
//     for(let i=0;i<headerlinks.length;i++){
//         headerlinks[i].classList.remove("active")
//          }
//          headerlinks[0].classList.add("active")
// }

// })





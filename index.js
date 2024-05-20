let links = document.getElementById("navlinks")
let openn = document.getElementById("openbtn")
let closee = document.getElementById("closefun")
let upbtn = document.querySelector(".up")

openn.onclick = () =>{
    links.style.right = "0"
}

closee.onclick = () =>{
    links.style.right = "-1000px"
}

window.onscroll = function(){
    if(window.scrollY >= 600){
        upbtn.style.display = "block" 
    }
    else {
        upbtn.style.display = "none" 
    }
}

upbtn.onclick = () =>{
    
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}
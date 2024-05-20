let links = document.getElementById("navlinks")
let openn = document.getElementById("openbtn")
let closee = document.getElementById("closefun")

openn.onclick = () =>{
    links.style.right = "0"
}

closee.onclick = () =>{
    links.style.right = "-1000px"
}
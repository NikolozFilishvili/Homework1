let divarr = document.querySelector(".second")
// sarchevi
let it = document.querySelector("i")
// all childs of grid
let g1 = document.querySelector(".grid div img:nth-child(1)")
let g2 = document.querySelector(".f")
let g3 = document.querySelector(".ff")
let g4 = document.querySelector(".fff")
let g5 = document.querySelector(".ffff")
let g6= document.querySelector(".fffff")
// what needs to change every time basically
let h1 = document.querySelector(".second h1")
let img = document.querySelector(".second img")
let btn = document.querySelector(".second button")

// console.log(g2)

// I use these to choose what needs to change and in what order <3
let first = ["Xiaomi Black Shark Lucifer T4", "/piktures 2/1.png"]
let second = ["JBL Tune T510 BT Wireless On-Ear Headphones Black", "/piktures 2/3.png"]
let third = ["Xiaomi Black Shark Lucifer T10 Black", "/piktures 2/6.png"]
let fourth = ["Logitech BT Keyboard K380 Grey", "/piktures 2/8.png"]
let fifth = ["Razer Mouse Pad Sphex V3 L Black", "/piktures 2/9.png"]
let sixth = ["Logitech c505 HD webcam Black", "/piktures 2/12.png"]
// event listeners
g1.addEventListener("click", func1)
g2.addEventListener("click", func2)
g3.addEventListener("click", func3)
g4.addEventListener("click", func4)
g5.addEventListener("click", func5)
g6.addEventListener("click", func6)

function func1(){
     it.style.color = "lightGreen"
     divarr.innerHTML = `<h1> ${first[0]} </h1>
                        <img src="${first[1]}">
                        <button> ხმის მიცემა </button>`
                        
}
function func2(){
    divarr.innerHTML = `<h1> ${second[0]} </h1>
                       <img src="${second[1]}">
                       <button> ხმის მიცემა </button>`
    let h1 = document.querySelector(".second h1")
    h1.style.color = "blue"     
    h1.style.fontSize = "25px"   
    let btn = document.querySelector(".second button")
    btn.style.border = "2px blue ridge"
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "blue";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = ""; // Set it to an empty string to revert to default
    });
    
    it.style.color = "blue"

}
function func3(){
    it.style.color = "lightGreen"
    divarr.innerHTML = `<h1> ${third[0]} </h1>
                        <img src="${third[1]}">
                        <button> ხმის მიცემა </button>`
}
function func4(){
    divarr.innerHTML = `<h1> ${fourth[0]} </h1>
                        <img src="${fourth[1]}">
                        <button> ხმის მიცემა </button>`
    let h1 = document.querySelector(".second h1")
    h1.style.color = "#E4CD41"     
                        
    let btn = document.querySelector(".second button")
    btn.style.border = "2px #E4CD41 ridge"
    btn.addEventListener("mouseover", function() {
                            btn.style.backgroundColor = "#E4CD41";
    });
    btn.addEventListener("mouseout", function() {
         btn.style.backgroundColor = ""; // Set it to an empty string to revert to default
    });   
    it.style.color = "#E4CD41"                 
}
function func5(){
    it.style.color = "lightGreen"
    divarr.innerHTML = `<h1> ${fifth[0]} </h1>
    <img src="${fifth[1]}">
    <button> ხმის მიცემა </button>`
}
function func6(){
    it.style.color = "lightGreen"
    divarr.innerHTML = `<h1> ${sixth[0]} </h1>
    <img src="${sixth[1]}">
    <button> ხმის მიცემა </button>`
}


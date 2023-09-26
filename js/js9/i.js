let but = document.getElementsByTagName("button")[0]
let p1 = document.getElementsByTagName("p")[0]
let conter = 0
function counter(){
    
    conter++
    p1.textContent = "Click count: " + conter;
}
button.addEventListener("click", updateCounter);
let btn = document.querySelector("button")
let span = document.querySelector("span")
let body = document.querySelector("body")
const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "A", "B", "C", "D", "E", "F"
  ];
  

  btn.addEventListener("click", function(){
    color="#"
    for(i=0;i<6;i++){
        color += hex[Math.trunc(Math.random() * 16)]
      }
      console.log(color)
    body.style.backgroundColor = color
    span.innerHTML =" "+ color
  })
  btn.addEventListener("mouseover", function(){
    color="#"
    for(i=0;i<6;i++){
        color += hex[Math.trunc(Math.random() * 16)]
      }
    btn.style.color = color

  })
  btn.addEventListener("mouseout", function(){
    btn.style.color = "black"
  })
  
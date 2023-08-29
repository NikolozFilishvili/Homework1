let h = document.getElementsByTagName("h1");
for (let s = 0; s < h.length; s++) {
  h[s].style.color = "green";
}
document.body.style.backgroundColor = "lightblue";

// let chad = document.createElement("h1")
// let chad_text = document.createTextNode("I am Goaeli")
// chad.appendChild(chad_text)

// let chad2 = document.createElement("h1")
// let chad_text2 = document.createTextNode("I am chad")
// chad.appendChild(chad_text2)

// var replace = document.getElementById("ps")
// var replace2 = document.getElementById("h2")
// var div = document.getElementsByTagName("div")

// div.replace(replace, chad)
// div.replace(replace2, chad2)

let chad = document.createElement("h1");
let chad_text = document.createTextNode("I am Goaeli");
chad.appendChild(chad_text);

let chad2 = document.createElement("h1");
let chad_text2 = document.createTextNode("I am chad");
chad2.appendChild(chad_text2);

var replace = document.getElementById("ps");
var replace2 = document.getElementById("h2");

var parentDiv = document.getElementById("div");

parentDiv.replaceChild(chad, replace);
parentDiv.replaceChild(chad2, replace2);

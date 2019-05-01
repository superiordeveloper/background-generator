var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandom = document.getElementById("random");
color1.value = "#ff0000";
color2.value = "#0000ff"

setGradient();


buttonRandom.addEventListener("click", function () {
//Esta solución fue tomada del primer comentario en este blog:
//https://www.paulirish.com/2009/random-hex-color-code-snippets/

color1.value = "#" + Math.random().toString(16).slice(2, 8);
color2.value = "#" + Math.random().toString(16).slice(2, 8);

setGradient();
console.log ("color1.value " + color1.value);

console.log ("color2.value " + color1.value);

})

function setGradient() {
    body.style.background=  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
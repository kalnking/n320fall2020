let st1 = document.getElementsByClassName("st1");
//console.log(st1);

//let colorChange = st1.getAttribute("fill");
//console.log(colorChange);

function colorChange(e) {
  st1.style.fill = "#ff0000";
}

for (var i = 0; i < st1.length; i++) {
  st1[i].addEventListener("click", colorChange);
}
//st1.addEventListener("click", trailCLick);
//console.log("working");
//function trailCLick(event) {
// event.target.style.fill = "#ff0000";
//}

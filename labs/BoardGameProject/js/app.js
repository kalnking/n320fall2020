let st1 = document.getElementsByClassName("st1");
console.log(st1);

let colorChange = st1.getAttribute("fill");
console.log(colorChange);

st1.addEventListener("click", trailCLick);
function trailCLick(event) {
  event.target.style.fill = "#ff0000";
}

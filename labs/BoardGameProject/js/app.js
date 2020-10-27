let test = document.getElementById("test");
console.log(test);

let colorChange = test.getAttribute("fill");
console.log(colorChange);

test.addEventListener("click", trailCLick);
function trailCLick(event) {
  event.target.style.fill = "#ff0000";
}

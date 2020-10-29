let st1 = document.getElementsByClassName("st1");
let player = 1;
let turn = true;
let grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function colorChange(e) {
  if (turn != false) {
    turn = false;
    event.target.style.fill = "#ff0000";
    //change banner?
  } else {
    turn = true;
    event.target.style.fill = "#ff0";
    //change banner?
  }
}

for (var i = 0; i < st1.length; i++) {
  st1[i].addEventListener("click", colorChange);
}

function columnCheck(col) {
  if (this.y >= 600) {
    this.y = 0;
    this.x = 100 + Math.random() * 300;
    myGround.colorChange();
  }
}

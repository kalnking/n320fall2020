let st1 = document.getElementsByClassName("st1");
//let col = st1.getAttribute("data-col");
//let row = st1.getAttribute("data-row");
this.turn = true;
this.player = 1;
this.grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

function colorChange(e) {
  console.log("click");
  if (turn != false) {
    3;
    turn = false;
    event.target.style.fill = "#ff0000";
    // checkWin();
    //change banner?
  } else {
    turn = true;
    event.target.style.fill = "#ff0";
    //change banner?
    // checkWin();
  }
}

for (var i = 0; i < st1.length; i++) {
  st1[i].addEventListener("click", colorChange);
}

class Checker {
  constructor(row, col) {
    this.player = 1;
    this.turn = true;
    console.log("click");
    function colorChange(e) {
      if (turn != false) {
        3;
        turn = false;
        event.target.style.fill = "#ff0000";
        // checkWin();
        //change banner?
      } else {
        turn = true;
        event.target.style.fill = "#ff0";
        //change banner?
        // checkWin();
      }

      for (var i = 0; i < st1.length; i++) {
        st1[i].addEventListener("click", colorChange);
      }
    }
  }
}

class Game {
  constructor() {
    this.grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];

    const space = { row: "", col: "" };
    let emptySpaceFound = false;
    let tempGrid = this.grid.reverse();

    for (let row = 0; row < tempGrid.length; row++) {
      for (let col = 0; col < tempGrid[row].length; col++) {
        if (col == space.col && !emptySpaceFound) {
          if (tempGrid[row][col] != 0) {
            emptySpaceFound = true;
            tempGrid[row][col] = "X";
          }
          this.grid = tempGrid.reverse();
        }
      }
    }
  }
}

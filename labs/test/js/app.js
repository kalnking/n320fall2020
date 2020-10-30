const player1 = 1;
const player2 = 2;
var turn = true;
let emptySpaceFound = false;

const grid = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const allcirs = document.querySelectorAll("circle");
const newSpotArr = Array.from(allcirs);
console.log(allcirs);

let newGrid = grid.reverse();
console.log(newGrid);

allcirs.forEach(circle => {
  circle.addEventListener("click", e => {
    const spot = event.target;
    const newSpotRow = spot.getAttribute("data-row");
    const newSpotCol = spot.getAttribute("data-col");
    const newSpot = { newSpotRow, newSpotCol };

    console.log(newSpot);

    console.log(grid[newSpotRow]);

    //newGrid[newSpotRow].splice(newSpotCol, 1, 2);
    turn = !turn;

    console.log(newGrid);
    if (turn != true) {
      spot.style.fill = "#0FF7";
      newGrid[newSpotRow].splice(newSpotCol, 1, 2);
      checkGrid();
    } else {
      spot.style.fill = "#5D009F";
      newGrid[newSpotRow].splice(newSpotCol, 1, 1);
      checkGrid();
    }

    function checkGrid() {
      for (var row = 0; row < newGrid.length; row++) {}
    }
  });
});

class Raindrop {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speed = 1 + Math.random() * 20;
  }

  update() {
    this.y = this.y + this.speed;
    fill(this.color);
    circle(this.x, this.y, this.radius);
    this.groundCheck();
  }

  groundCheck() {
    if (this.y >= 600) {
      this.y = 0;
      this.x = 100 + Math.random() * 300;
      myGround.colorChange();
    }
  }
}

class Ground {
  constructor() {
    this.x = 0;
    this.y = 550;
    this.color = [66, 135, 125];
    this.width = 600;
    this.length = 50;
  }

  update() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.length);
  }

  colorChange() {
    this.color[2] += 1;
  }
}

let myRaindrops = [];
let myGround = new Ground();

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; i++) {
    myRaindrops[i] = new Raindrop(
      100 + Math.random() * 300,
      0,
      50 + Math.random() * 50,
      [66, 135, 245]
    );
  }
}

function draw() {
  background(235, 245, 245);
  noStroke();
  myRaindrops.forEach(raindrop => {
    raindrop.update();
  });
  myGround.update();
}

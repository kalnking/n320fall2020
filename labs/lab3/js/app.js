class firstCandy {
  constructor(name) {
    this.name = name;
    this.inventory = 50;
  }
  render() {
    return `
      <div>${this.name}</div>
      <div>Inventory: ${this.inventory}</div>`;
  }
  purchase() {
    this.inventory--;
  }
}

class secondCandy {
  constructor(name) {
    this.name = name;
    this.inventory = 20;
  }
  render() {
    return `
      <div>${this.name}</div>
      <div>Inventory: ${this.inventory}</div>`;
  }
  purchase() {
    this.inventory--;
  }
}

class thirdCandy {
  constructor(name) {
    this.name = name;
    this.inventory = 10;
  }
  render() {
    return `
      <div>${this.name}</div>
      <div>Inventory: ${this.inventory}</div>`;
  }
  purchase() {
    this.inventory--;
  }
}

let myfirstCandy = new firstCandy("Snickers");
let mysecondCandy = new secondCandy("Butterfingers");
let mythirdCandy = new thirdCandy("Starbursts");
let firstcandyDiv = document.getElementById("candyDiv");
let secondcandyDiv = document.getElementById("secondCandyDiv");
let thirdcandyDiv = document.getElementById("thirdCandyDiv");
candyDiv.innerHTML = myfirstCandy.render();
secondcandyDiv.innerHTML = mysecondCandy.render();
thirdcandyDiv.innerHTML = mythirdCandy.render();

function purchaseFirstCandy() {
  myfirstCandy.purchase();
  candyDiv.innerHTML = myfirstCandy.render();
}

function purchaseSecondCandy() {
  mysecondCandy.purchase();
  secondCandyDiv.innerHTML = mysecondCandy.render();
}

function purchaseThirdCandy() {
  mythirdCandy.purchase();
  thirdCandyDiv.innerHTML = mythirdCandy.render();
}

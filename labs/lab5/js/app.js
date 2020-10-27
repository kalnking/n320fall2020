var cardCanvas = document.querySelector("#cardCanvas");
var card = ["a", "b"];
var number = ["1", "2", "3"];
var i = 0;

//create card as a div
card.forEach(card => {
  number.forEach(number => {
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    //event of animation
    newCard.addEventListener("mouseover", hoverOver);
    newCard.addEventListener("mouseout", hoverOut);

    //canvas that holds the divs created as cards
    cardCanvas.appendChild(newCard);
  });
});

function hoverOver(event) {
  event.target.classList.add("hoverOver");
  event.target.classList.remove("hoverOut");
}

function hoverOut(event) {
  event.target.classList.add("hoverOut");
  event.target.classList.remove("hoverOver");
}

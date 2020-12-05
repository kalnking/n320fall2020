var data = {
  colors: [
    { name: "Red", items: ["triad", "hex"] },
    { name: "Blue", items: ["analogous", "hex"] },
    { name: "Yellow", items: ["complimentary", "hex"] }
  ],

  items: {
    triad: { colors: "red", weight: "#ffff" },
    analogous: { description: "Heals", weight: 1 },
    complimentary: { description: "Bulwark", weight: 30 }
  }
};

var itemTag = data.characters[0].items[0];
console.log(data.items[itemTag]);

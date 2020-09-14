class Instrument {
  constructor(family, loudness, play) {
    this.family = family;
    this.play = play;
    this.loudness = loudness;
  }
  playInstrument() {
    console.log(this.family, this.play + " at a " + this.loudness);
  }
}

class Drum extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

class Guitar extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

class Saxophone extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

let myDrum = new Drum("Drum", "5", "beats");
let myGuitar = new Guitar("Guitar", "7", "strums");
let mySaxophone = new Saxophone("Saxophone", "10", "wails");

myDrum.playInstrument();
myGuitar.playInstrument();
mySaxophone.playInstrument();

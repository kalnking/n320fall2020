//base class
class Instrument {
  constructor(family, loudness, play) {
    //properties of each of my instruments
    this.family = family;
    this.play = play;
    this.loudness = loudness;
  }
  playInstrument() {
    //browser will list each instrument
    console.log(this.family, this.play + " at a " + this.loudness);
  }
}
//concrete classes
class Percussion extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

class String extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

class Woodwind extends Instrument {
  constructor(family, play, loudness) {
    super(family, play, loudness);
  }
}

//each instance of child classes
let myPercussion = new Percussion("Drum", "6", "beats");
let myString = new String("Guitar", "7", "strums");
let myWoodwind = new Woodwind("Saxophone", "10", "wails");

myPercussion.playInstrument();
myString.playInstrument();
myWoodwind.playInstrument();

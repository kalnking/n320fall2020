Vue.component("frame-card", {
  props: ["frame", "isactive"],
  template:
    "<div class='frame' v-bind:class='{fcardActive:isactive, fcardOut:!isactive}'> [FRAME] <br> Model: {{ frame.name }} <br> Weight: {{ frame.weight }} lbs <br> Shield Rating: {{ frame.shieldRating }} HP <br> Speed: {{ frame.speed }} mph</div>"
});

var app = new Vue({
  el: "#app",
  data: {
    //FRAME
    frame: [
      {
        name: "MK011 Cuirass",
        weight: 1800,
        shieldRating: 2000,
        speed: -45,
        info:
          "Top military grade frame armor used by the Hominid Empire. This armor boasts the highest shield rating amongst all of the human frameworks. However, it's heavy weight makes it impractical for average situational use. Perfect for crowd control, A mech in the MK011 Cuirass will not be defeated by numbers alone.",
        image: "images/cupcake3.png"
      },
      {
        name: "BR9-Katana Body Armor",
        weight: 1000,
        shieldRating: 1350,
        speed: -30,
        info:
          "The BR9-Katana Body Armor is favored for it's versatility and quality in build. Black Sun arms dealers invented the framework in hopes of pitching it to the Hominid Empire for military use. Negotiations failed and now Black Sun supplies this framework to the Empire's adversaries.",
        image: "images/cupcake4.png.png"
      },
      {
        name: "Stryder Chest (2056 Edition)",
        weight: 600,
        shieldRating: 970,
        speed: -15,
        info:
          "The 2056 model of the Stryder Chest piece was renowned for revolutionizing the manueverability of mechs. Nearly 100 years later it is still favored by mercenaries for it's cheap price tag and abundance of after market parts. What the Stryder Chest lacks in shielding power it makes up for in speed. Martian rebels fitted their scouting Mechs with the Stryder Chest all the way up until their defeat 15 years ago.",
        image: "images/cupcake2/png"
      }
    ],
    curFrameId: 0,
    currentFrame: {
      name: "MK011 Cuirass",
      weight: 1800,
      shieldRating: 2000,
      speed: -45,
      info:
        "Top military grade frame armor used by the Hominid Empire. This armor boasts the highest shield rating amongst all of the human frameworks. However, it's heavy weight makes it impractical for average situational use. Perfect for crowd control, A mech in the MK011 Cuirass will not be defeated by numbers alone.",
      image: "images/cupcake1.png"
    },

    fcardActive: true
  },

  methods: {
    //FRAME
    arrowClicked: function() {
      this.fcardActive = !this.fcardActive;

      setTimeout(() => {
        this.curFrameId++;
        if (this.curFrameId >= this.frame.length) this.curFrameId = 0;
        this.currentFrame = this.frame[this.curFrameId];
        this.fcardActive = !this.fcardActive;
      }, 200);
      console.log(this.curFrameId);
    },
    backClicked: function() {
      this.fcardActive = !this.fcardActive;

      setTimeout(() => {
        this.curFrameId--;
        if (this.curFrameId <= -1) this.curFrameId = 2;
        this.currentFrame = this.frame[this.curFrameId];
        this.fcardActive = !this.fcardActive;
      }, 200);
      console.log(this.curFrameId);
    },

    //DATA

    totalData: function() {
      document.getElementById("weightContainer").innerHTML =
        this.currentFrame.weight + " lbs";
      document.getElementById("speedContainer").innerHTML =
        this.currentFrame.speed + " mph";
      document.getElementById("aiContainer").innerHTML =
        this.currentHead.AI + " IQ";
      document.getElementById("shieldContainer").innerHTML =
        this.currentFrame.shieldRating + " HP";
      document.getElementById("rpmContainer").innerHTML =
        this.currentArm.firepower + " rpm";

      //SHOW MECH

      var showFrame = document.createElement("img");
      showFrame.src = this.currentFrame.image;
      document.getElementById("frameContainer").appendChild(showFrame);
      showFrame.style.width = 200 + "px";
      showFrame.style.height = 200 + "px";
    },

    fdisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentFrame.info;
    }
  }
});

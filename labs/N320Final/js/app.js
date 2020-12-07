Vue.component("frame-card", {
  props: ["frame", "isactive"],
  template:
    "<div class='frame' v-bind:class='{fcardActive:isactive, fcardOut:!isactive}'><br> {{ frame.name }}"
});

var app = new Vue({
  el: "#app",
  data: {
    frame: [
      {
        name: "Carrot Cake Cupcake",
        icing: "cream cheese",
        cake: "red velvet",
        price: "$10",
        info: "TEST FOUR",
        image: "images/cupcake4.png"
      },
      {
        name: "Birthday Cake Cupcake",
        icing: "vanilla",
        cake: "confetti",
        price: "$12",
        info: "TEST THREE",
        image: "images/cupcake5.png"
      },
      {
        name: "Princess Cupcake",
        icing: "chocolate",
        cake: "chocolate",
        price: "$10",
        info: "TEST TWO",
        image: "images/cupcake3.png"
      }
    ],
    curFrameId: 0,
    currentFrame: {
      name: "Strawberry Delight Cupcake",
      icing: "strawberry",
      cake: "vanilla",
      price: "$12",
      info: "TEST ONE",
      image: "images/cupcake6.png"
    },
    fcardActive: true
  },

  methods: {
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

    totalData: function() {
      document.getElementById(
        "backContainer"
      ).innerHTML = this.currentFrame.image;

      var showFrame = document.createElement("img");
      showFrame.src = this.currentFrame.image;
      document.getElementById("backContainer").appendChild(showFrame);
      showFrame.style.width = 690 + "px";
      showFrame.style.height = 690 + "px";
    },

    fdisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentFrame.info;
    }
  }
});

Vue.component("frame-card", {
  props: ["frame", "isactive"],
  template:
    "<div class='frame' v-bind:class='{fcardActive:isactive, fcardOut:!isactive}'><br> {{ frame.name }}<br> Icing: {{ frame.icing }}<br> Cake: {{ frame.cake}}<br> Price: {{ frame.price }}</div>"
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
        info: "TEST",
        image: "images/cupcake3.png"
      },
      {
        name: "Birthday Cake Cupcake",
        icing: "vanilla",
        cake: "confetti",
        price: "$12",
        info: "TEST.",
        image: "images/cupcake4.png.png"
      },
      {
        name: "Chocolate Dream Cipcake",
        icing: "chocolate",
        cake: "chocolate",
        price: "$10",
        info: "TEST",
        image: "images/cupcake2/png"
      }
    ],
    curFrameId: 0,
    currentFrame: {
      name: "Strawberry Delight Cupcake",
      icing: "strawberry",
      cake: "vanilla",
      price: "$12",
      info: "TEST",
      image: "images/cupcake1.png"
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

      var showFrame = document.createElement("img");
      showFrame.src = this.currentFrame.image;
      document.getElementById("backContainer").appendChild(showFrame);
      showFrame.style.width = 200 + "px";
      showFrame.style.height = 200 + "px";
    },

    fdisplayInfo: function() {
      document.getElementById("moreInfo").innerHTML = this.currentFrame.info;
    }
  }
});

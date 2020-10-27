Vue.component("book-view", {
  props: ["book"],
  template:
    "<li> Title: {{ book.title }} {{ book.cover }} Author: {{ book.author }}</li>"
});

let app = new Vue({
  el: "#app",
  data: {
    purchases: 0,
    message: "Books For Sale",
    ready: false,
    books: [
      { id: 0, title: "Aliens Attack", cover: "👽", author: "BOB" },
      { id: 1, title: "Ghostbusters", cover: "👻", author: "JOE" }
    ]
    //   currentBook: { title: "Sienna", cover: 2, author: 0 },
    //   currentBookId: 0,
    //   bookActive: false
  },
  methods: {
    buyBook: function() {
      console.log("it works");
      this.purchases += 1;
      //     this.currentBookId++;
      //    this.currentBook = this.book[currentBookId];
      //   if (this.currentBookId >= this.book.length) {
      //     this.currentBookId = -1;
      //   }
      //   this.bookActive = !this.bookActive;
    }
  }
});

const URL = "http://localhost:8080";

var app = new Vue({
  el: "#app",
  data: {
    nameInput: "",
    colorInput: "",
    ageInput: 0,

    kittens: [],
  },
  methods: {
    getKittens: function () {
      fetch(URL + "/kittens").then((response) => {
        response.json().then((data) => {
          this.kittens = data;
        });
      });
    },
  },

  created: function () {
    this.getKittens();
  },
});

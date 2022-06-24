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

    addKitten: function () {
      let newKitten = {
        name: this.nameInput,
        color: this.colorInput,
        age: this.ageInput,
      };

      this.postKitten(newKitten);
      this.nameInput = "";
      this.colorInput = "";
      this.ageInput = 0;
    },

    postKitten: function (newKitten) {
      fetch(URL + "/kitten", {
        method: "POST",
        body: JSON.stringify(newKitten),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        console.log(response);
        this.getKittens();
      });
    },
  },

  created: function () {
    this.getKittens();
  },
});

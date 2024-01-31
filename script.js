const button = document.getElementById("btn");
const body = document.getElementById("body");
const colors = [
  "blue",
  "green",
  "voilet",
  "pink",
  "grey",
  "yellow",
  "white",
  "red",
  "purple",
];

body.style.backgroundColor = "red";

button.addEventListener("click", function () {
  const colorsIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorsIndex];
});


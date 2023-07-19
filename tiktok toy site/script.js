const right = document.querySelector(".right");
const left = document.querySelector(".left");
const backToys = document.querySelector(".back-toys");
const frontToys = document.querySelector(".front-toys");
const toysName = document.querySelector(".toys-name");
const circle = document.querySelector(".circle");
const glassWrapper = document.querySelector(".glass-wrapper");

frontToys.style.left = "233%";
backToys.style.left = "112%";
toysName.style.top = "0px";

let index = 0;

const colors = [
  {
    front: "rgb(189, 218, 65)",
    back: "rgba(192, 211, 23, 0.5)",
  },
  {
    front: "rgb(80, 124, 91)",
    back: "rgb(80, 124, 91, 0.5)",
  },
  {
    front: "rgb(179, 52, 140)",
    back: "rgba(131, 58, 115, 0.5)",
  },
  {
    front: "rgb(41, 37, 40)",
    back: "rgba(56, 52, 55, 0.5)",
  },
];

right.addEventListener("click", () => {
  if (parseInt(frontToys.style.left) > -127) {
    index++;
    backToys.style.left = parseInt(backToys.style.left) - 42 + "%";
    frontToys.style.left = parseInt(frontToys.style.left) - 120 + "%";
    toysName.style.top = parseInt(toysName.style.top) - 33 + "px";
    circle.style.background = colors[index].front;
    glassWrapper.style.background = colors[index].back;
  }
});
left.addEventListener("click", () => {
  if (parseInt(frontToys.style.left) < 233) {
    index--;
    frontToys.style.left = parseInt(frontToys.style.left) + 120 + "%";
    backToys.style.left = parseInt(backToys.style.left) + 42 + "%";
    toysName.style.top = parseInt(toysName.style.top) + 33 + "px";
    circle.style.background = colors[index].front;
    glassWrapper.style.background = colors[index].back;
  }
});

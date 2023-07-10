const main = document.querySelector("main");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const circle = document.querySelector(".circle");
const title = document.querySelector(".title");
const pie = document.querySelector(".pie");
const corner1 = document.querySelector(".corner-1");
const corner2 = document.querySelector(".corner-2");

const data = [
  {
    rotate: 0,
    title: "Lemon Pie",
    pie: "./images/lemon.png",
    corner: "./images/yellow.png",
    background:
      "linear-gradient(0deg,rgba(118, 110, 2, 1) 26%,rgba(214, 201, 27, 1) 100%)",
  },
  {
    rotate: 28,
    title: "Strawberry Pie",
    pie: "./images/strawberry.png",
    corner: "./images/redS.png",
    background:
      "linear-gradient(0deg, rgba(99,1,5,1) 26%, rgba(227,60,67,1) 100%)",
  },
  {
    rotate: 54,
    title: "Blueberry Pie",
    pie: "./images/blueberry.png",
    corner: "./images/blue.png",
    background:
      "linear-gradient(0deg, rgba(27,15,55,1) 26%, rgba(69,131,238,1) 100%)",
  },
  {
    rotate: 80,
    title: "Cherry Pie",
    pie: "./images/cherry.png",
    corner: "./images/redC.png",
    background:
      "linear-gradient(0deg, rgba(47,12,27,1) 26%, rgba(236,4,33,1) 100%)",
  },
];

let index = 0;
document.querySelectorAll(".name").forEach((item) => {
  new CircleType(item).radius(300);
});

right.addEventListener("click", () => {
  if (index < 3) {
    index++;
    circle.style.transform = `rotate(${data[index].rotate}deg)`;
    main.style.background = data[index].background;
    pie.style.opacity = "0.1";
    title.style.opacity = "0.1";
    corner1.style.opacity = "0.1";
    corner2.style.opacity = "0.1";

    setTimeout(() => {
      pie.style.opacity = "1";
      title.style.opacity = "1";
      corner1.style.opacity = "1";
      corner2.style.opacity = "1";
      pie.src = data[index].pie;
      title.innerHTML = data[index].title;
      corner1.src = data[index].corner;
      corner2.src = data[index].corner;
    }, 400);
  }
});
left.addEventListener("click", () => {
  if (index > 0) {
    index--;
    main.style.background = data[index].background;
    circle.style.transform = `rotate(${data[index].rotate}deg)`;
    pie.style.opacity = "0.1";
    title.style.opacity = "0.1";
    corner1.style.opacity = "0.1";
    corner2.style.opacity = "0.1";
    setTimeout(() => {
      pie.style.opacity = "1";
      title.style.opacity = "1";
      corner1.style.opacity = "1";
      corner2.style.opacity = "1";
      pie.src = data[index].pie;
      title.innerHTML = data[index].title;
      corner1.src = data[index].corner;
      corner2.src = data[index].corner;
    }, 400);
  }
});

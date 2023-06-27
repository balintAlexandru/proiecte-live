const right = document.querySelector(".right");
const left = document.querySelector(".left");
const wheel = document.querySelector(".wheel");
const images = document.querySelectorAll(".circle");
const titleName = document.querySelector(".name");
const priceaAndTime = document.querySelectorAll(".list");

images[0].style.opacity = "100%";
let index = 0;
let topName = 0;
let priceAndTimePoz = 0;
let whellDeg = 0;

right.addEventListener("click", () => {
  if (whellDeg === -90) {
    right.style.color = "white";
    right.style.backgroundColor = "transparent";
  }
  if (whellDeg > -135) {
    images[index].style.opacity = "60%";
    images[index + 1].style.opacity = "100%";
    index++;

    titleName.style.top = topName - 130 + "px";
    priceaAndTime.forEach((item) => {
      item.style.top = priceAndTimePoz - 40 + "px";
    });
    topName -= 130;
    priceAndTimePoz -= 40;

    left.style.color = "black";
    left.style.backgroundColor = "white";
    whellDeg -= 45;
    wheel.style.transform = `rotate(${whellDeg}deg)`;
  }
});

left.addEventListener("click", () => {
  if (whellDeg === -45) {
    left.style.color = "white";
    left.style.backgroundColor = "transparent";
  }
  if (whellDeg < 0) {
    images[index].style.opacity = "60%";
    images[index - 1].style.opacity = "100%";
    index--;

    titleName.style.top = topName + 130 + "px";
    priceaAndTime.forEach((item) => {
      item.style.top = priceAndTimePoz + 40 + "px";
    });
    topName += 130;
    priceAndTimePoz += 40;

    right.style.color = "black";
    right.style.backgroundColor = "white";
    whellDeg += 45;
    wheel.style.transform = `rotate(${whellDeg}deg)`;
  }
});

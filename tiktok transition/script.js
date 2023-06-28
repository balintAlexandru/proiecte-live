const nameList = document.querySelector(".name-list");
const littleNameList = document.querySelector(".little-name-list");
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");

let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let img3 = document.querySelector(".img-3");

nameList.style.top = 0;
littleNameList.style.top = "-45px";
let index = 0;

const imageModel = [
  {
    img1: "scale(2)",
    img2Y: "translateY(75px) scale(1)",
    img3Y: "translateY(45px) scale(2)",
    image: "./images/highlands.jpg",
  },
  {
    img1: "scale(2)",
    img2Y: "translateY(15px) scale(2)",
    img3Y: "translateY(40px) scale(2)",
    image: "./images/sahara.jpg",
  },
  {
    img1: "scale(2)",
    img2Y: "translateY(15px) scale(2)",
    img3Y: "translateY(5px) scale(2)",
    image: "./images/maldives.jpg",
  },
];

img1.style.transform = imageModel[index].img1;
img2.style.transform = imageModel[index].img2Y;
img3.style.transform = imageModel[index].img3Y;
let number = 0;

const handleRightAnimation = (index) => {
  number += 360;

  img1.style.transform = imageModel[index].img1;
  img2.style.transform = imageModel[index].img2Y;
  img3.style.transform = imageModel[index].img3Y;

  img1.style.transform += `rotate(${number}deg)`;
  img2.style.transform += `rotate(${number}deg)`;
  img3.style.transform += `rotate(${number}deg)`;

  setTimeout(() => {
    img3.src = imageModel[index].image;
  }, 200);
  setTimeout(() => {
    img2.src = imageModel[index].image;
  }, 500);
  setTimeout(() => {
    img1.src = imageModel[index].image;
  }, 800);
};

const handleLeftAnimation = (index) => {
  number -= 360;

  img1.style.transform = imageModel[index].img1;
  img2.style.transform = imageModel[index].img2Y;
  img3.style.transform = imageModel[index].img3Y;

  img1.style.transform += `rotate(${number}deg)`;
  img2.style.transform += `rotate(${number}deg)`;
  img3.style.transform += `rotate(${number}deg)`;

  setTimeout(() => {
    img3.src = imageModel[index].image;
  }, 400);
  setTimeout(() => {
    img2.src = imageModel[index].image;
  }, 500);
  setTimeout(() => {
    img1.src = imageModel[index].image;
  }, 600);
};

rightButton.addEventListener("click", () => {
  if (
    parseInt(nameList.style.top) > -90 &&
    parseInt(littleNameList.style.top) < 0
  ) {
    index++;
    nameList.style.top = parseInt(nameList.style.top) - 65 + "px";
    littleNameList.style.top = parseInt(littleNameList.style.top) + 25 + "px";
    setTimeout(() => {
      handleRightAnimation(index);
    }, 100);
  }
});

leftButton.addEventListener("click", () => {
  if (
    parseInt(nameList.style.top) < 0 &&
    parseInt(littleNameList.style.top) > -22
  ) {
    nameList.style.top = parseInt(nameList.style.top) + 65 + "px";
    littleNameList.style.top = parseInt(littleNameList.style.top) - 25 + "px";
    index--;
    setTimeout(() => {
      handleLeftAnimation(index);
    }, 100);
  }
});

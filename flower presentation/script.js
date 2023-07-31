const image = document.querySelector("img");
const up = document.querySelector(".up");
const down = document.querySelector(".next");
const wrapper = document.querySelector(".wrapper");

let index = 0;
wrapper.style.top = "0px";
const images = [
  "./images/flower1.png",
  "./images/flower2.png",
  "./images/flower3.png",
  "./images/flower4.png",
];

down.addEventListener("click", () => {
  if (index < 3) {
    index++;
    wrapper.style.top = parseInt(wrapper.style.top) - 550 + "px";
    setTimeout(() => {
      image.src = images[index];
    }, 400);
  }
});
up.addEventListener("click", () => {
  if (index > 0) {
    index--;
    wrapper.style.top = parseInt(wrapper.style.top) + 550 + "px";
    setTimeout(() => {
      image.src = images[index];
    }, 400);
  }
});

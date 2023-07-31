const add = document.querySelector(".add");
const camera = document.querySelector(".camera");
const picture = document.querySelector(".picture");
const share = document.querySelector(".share");
const video = document.querySelector(".video");

let firstClick = false;

add.style.transform = "rotate(0deg)";
camera.style.top = "50%";
share.style.top = "50%";
picture.style.left = "50%";
video.style.left = "50%";

add.addEventListener("click", () => {
  if (!firstClick) {
    firstClick = true;
    add.style.transform = "rotate(403deg)";
    add.style.width = "40px";
    add.style.height = "40px";
    camera.style.top = "10%";
    share.style.top = "90%";
    picture.style.left = "10%";
    video.style.left = "90%";
  } else {
    firstClick = false;
    add.style.transform = "rotate(-0deg)";
    add.style.width = "60px";
    add.style.height = "60px";
    camera.style.top = "50%";
    share.style.top = "50%";
    picture.style.left = "50%";
    video.style.left = "50%";
  }
});

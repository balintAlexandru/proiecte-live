const body = document.querySelector("body");
const button = document.querySelector(".round");
const switchTheme = document.querySelector(".switch");
const sunCircle = document.querySelector(".sun-circle");
const moonCircle = document.querySelector(".moon-circle");
const sunCloud1 = document.querySelector(".sun-cloud-1");
const sunCloud2 = document.querySelector(".sun-cloud-2");
const moonCloud1 = document.querySelector(".moon-cloud-1");
const moonCloud2 = document.querySelector(".moon-cloud-2");
const ground = document.querySelector(".ground");

button.style.left = "5px";
sunCloud1.style.top = "20px";
sunCloud2.style.top = "10px";
moonCloud1.style.top = "70px";
moonCloud2.style.top = "-50px";

button.addEventListener("click", () => {
  if (parseInt(button.style.left) === 5) {
    switchTheme.style.boxShadow = "1px 2px 25px -12px rgba(255, 255, 255)";
    button.style.boxShadow = "-1px 0px 63px -10px rgba(255, 255, 255 , 0.5)";
    button.style.left = "215px";
    switchTheme.style.backgroundColor = "#011121";
    sunCircle.style.transform = "rotate(-120deg)";
    moonCircle.style.transform = "rotate(120deg)";
    sunCloud1.style.top = "70px";
    sunCloud2.style.top = "-30px";
    moonCloud1.style.top = "10px";
    moonCloud2.style.top = "10px";
    ground.style.filter = "brightness(60%)";
    body.style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    switchTheme.style.boxShadow = "-1px 0px 63px -22px rgba(0, 0, 0)";
    button.style.left = "5px";
    switchTheme.style.backgroundColor = "rgb(184, 163, 241)";
    sunCircle.style.transform = "rotate(120deg)";
    moonCircle.style.transform = "rotate(-120deg)";
    sunCloud1.style.top = "20px";
    sunCloud2.style.top = "10px";
    moonCloud1.style.top = "70px";
    moonCloud2.style.top = "-50px";
    ground.style.filter = "brightness(100%)";
    body.style.background = "white";
  }
});

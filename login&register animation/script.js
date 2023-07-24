const signUpBtn = document.querySelector(".sign-up-btn");
const loginBtn = document.querySelector(".login-btn");
const loginCard = document.querySelector(".login");
const signUpCard = document.querySelector(".sign-up");

loginCard.style.left = "40%";
signUpCard.style.left = "40%";
signUpCard.style.transform = "rotate(7deg)";

signUpBtn.addEventListener("click", () => {
  loginAnimation();
});
loginBtn.addEventListener("click", () => {
  signUpAnimation();
});

const loginAnimation = () => {
  loginCard.style.left = "15%";
  signUpCard.style.transform = "rotate(0deg)";
  setTimeout(() => {
    signUpCard.style.zIndex = 1;
    loginCard.style.zIndex = 0;
  }, 500);
  setTimeout(() => {
    loginCard.style.left = "40%";
    loginCard.style.transform = "rotate(7deg)";
  }, 1000);
};

const signUpAnimation = () => {
  signUpCard.style.left = "65%";
  loginCard.style.transform = "rotate(0deg)";
  setTimeout(() => {
    signUpCard.style.zIndex = 0;
    loginCard.style.zIndex = 1;
  }, 500);
  setTimeout(() => {
    signUpCard.style.left = "40%";
    signUpCard.style.transform = "rotate(7deg)";
  }, 1000);
};

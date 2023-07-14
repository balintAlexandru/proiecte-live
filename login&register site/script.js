const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const login = document.querySelector(".login");
const register = document.querySelector(".register");
const loginHide = document.querySelector(".login-hide");
const registerHide = document.querySelector(".register-hide");

registerBtn.addEventListener("click", () => {
  login.style.width = "0";
  register.style.width = "50%";
  loginHide.style.visibility = "hidden";
  setTimeout(() => {
    registerHide.style.visibility = "visible";
  }, 800);
});

loginBtn.addEventListener("click", () => {
  login.style.width = "50%";
  register.style.width = "0%";
  login.style.visibility = "visible";
  registerHide.style.visibility = "hidden";
  setTimeout(() => {
    loginHide.style.visibility = "visible";
  }, 800);
});

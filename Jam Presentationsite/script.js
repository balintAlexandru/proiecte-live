const jar = document.querySelector(".jar");
const productName = document.querySelector("h1");
const price = document.querySelector("span");
const button = document.querySelector("button");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const categoryIamge = document.querySelectorAll(".category-image");

const model = [
  {
    name: "Strawberry Jam",
    price: "$ 3.00",
    color: "rgb(241, 79, 79)",
    jarIamge: "./images/jar1.png",
    fruitImage: "./images/strawberry.png",
  },
  {
    name: "Lemon Jam",
    price: "$ 5.99",
    color: "rgb(67, 219, 36)",
    jarIamge: "./images/jar2.png",
    fruitImage: "./images/lemon.png",
  },
  {
    name: "Cherry Jam",
    price: "$ 10.20",
    color: "rgb(150, 44, 30)",
    jarIamge: "./images/jar3.png",
    fruitImage: "./images/cherry.png",
  },
  {
    name: "Orange Jam",
    price: "$ 7.81",
    color: "rgb(194, 148, 22)",
    jarIamge: "./images/jar4.png",
    fruitImage: "./images/orange.png",
  },
];

img1.style.top = "-200px";
img2.style.left = "-220px";
img3.style.left = "-200px";

jar.addEventListener("mouseenter", () => {
  img1.style.top = "-60px";
  img2.style.left = "-40px";
  img3.style.left = "20px";
});

jar.addEventListener("mouseleave", () => {
  img1.style.top = "-200px";
  img2.style.left = "-220px";
  img3.style.left = "-200px";
});

categoryIamge.forEach((item, index) => {
  item.addEventListener("click", () => {
    productName.innerHTML = model[index].name;
    price.innerHTML = model[index].price;
    button.style.background = model[index].color;
    jar.src = model[index].jarIamge;
    img1.src = model[index].fruitImage;
    img2.src = model[index].fruitImage;
    img3.src = model[index].fruitImage;
  });
});

const bookButton = document.querySelector(".book");
const orderButton = document.querySelector(".order");
const card = document.querySelector(".card");

bookButton.addEventListener("click", () => {
  card.classList.toggle("is-flip");
});

orderButton.addEventListener("click", () => {
  card.classList.remove("is-flip");
});

const circleType = new CircleType(document.querySelector("h3"));
circleType.radius(200);

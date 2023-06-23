const cards = document.querySelectorAll(".card");
let expanded = cards[0];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    expanded.children[0].children[1].classList.remove("fade-in");
    expanded.children[0].children[1].style.display = "none";
    expanded.classList.remove("expand");
    card.children[0].children[1].style.display = "flex";
    card.classList.add("expand");
    card.children[0].children[1].classList.add("fade-in");
    expanded = card;
  });
});

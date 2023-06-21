const productImage = document.querySelector("img");
const productName = document.querySelector("h2");
const productDescription = document.querySelector(".description");
const productPrice = document.querySelector(".price");
let currentElement = document.querySelector(".activ");

const cardModel = [
  {
    image: "./images/Dubai.jpg",
    name: "Vacanta Dubai",
    description:
      "Cultura emiratelor se axeaza in principal in jurul religiei islamice, a traditiilor arabe si a culturii beduinilor. Si desi este o societate puternic urbanizata, cel ce viziteaza Emiratele Arabe ar trebui sa respecte traditiile si obiceiurile locale si sa manifeste atentie si prudenta sporite pe toata durata prezentei in aceasta tara.",
    price: "Pret: 1000$",
  },
  {
    image: "./images/Madagascar.jpg",
    name: "Vacanta Madagascar",
    description:
      "Madagascar, numele oficial Republique de Madagascar (Repoblikan'i Madagasikara), este o țară insulară aflată în Oceanul Indian, în partea estică a coastei Africii, în emisfera sudică.",
    price: "Pret: 1500$",
  },
  {
    image: "./images/Venetia.jpg",
    name: "Vacanta Venetia",
    description:
      "Venetia. Unica si fermecatoare. Daca te gandesti la un city break, este o optiune grozava, iar organizarea nu necesita mult efort. Pentru a-ti veni in ajutor, iti vom spune cum ajungi la Venetia si cu ce te deplasezi de la aeroport in oras.",
    price: "Pret: 800$",
  },
];

const deleteClass = (element) => {
  if (element.classList.contains("fade-in")) {
    element.classList.remove("fade-in");
  }
};

document.querySelectorAll(".dot").forEach((element, index) => {
  element.addEventListener("click", () => {
    currentElement.classList.remove("activ");
    deleteClass(productImage);
    deleteClass(productName);
    deleteClass(productDescription);
    deleteClass(productPrice);
    setTimeout(() => {
      productImage.src = cardModel[index].image;
      productName.innerHTML = cardModel[index].name;
      productDescription.innerHTML = cardModel[index].description;
      productPrice.innerHTML = cardModel[index].price;
      productName.classList.add("fade-in");
      productDescription.classList.add("fade-in");
      productPrice.classList.add("fade-in");
    }, 100);
    currentElement = element;
    element.classList.add("activ");
  });
});

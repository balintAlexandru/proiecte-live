const main = document.querySelector("main");
const smallImages = document.querySelector(".small-images");
const bigImages = document.querySelector(".big-images");
const smallImagesArray = Array.from(smallImages.children);
const bigImagesArray = Array.from(bigImages.children);

const name = document.querySelector(".name");
const description = document.querySelector(".description");

smallImages.style.top = "15px";

const model = [
  {
    name: "WEDNESDAY ADDAMS",
    description:
      "While Addams Family fans have previously seen this character as a little girl, she’s now (nearly) all grown up. Wednesday’s, well, Wednesday, is a “fearless, unapologetically smart” 15-year-old newcomer to Nevermore Academy, according to Millar. Wednesday’s got the same pigtails and enviable goth wardrobe as always, along with nascent young-adult angst and burgeoning psychic abilities.  ",
  },
  {
    name: "FESTER ADDAMS",
    description:
      "Wednesday doesn’t trust a lot of adults. But she does put her faith in eccentric Uncle Fester. He’s a master of the dark arts and always ready to work some magic to help out Wednesday in her detective work. We just wouldn’t recommend leaving Uncle Fester alone with a bank vault. ",
  },
  {
    name: "MORTICIA ADDAMS",
    description:
      " Morticia, the definition of spooky glamour, is Wednesday’s mother and a main source of embarrassment for her teenage daughter. Outcasts — they’re just like us! Even though Wednesday would never admit this, her teenage years are “definitely” about “making her own mark and stepping out from under her parents,” says Millar. ",
  },
  {
    name: "GOMEZ ADDAMS",
    description:
      "Gomez is Wednesday’s beloved father and Morticia’s passionate husband. Gomez and Morticia met and fell head over heels in love at Nevermore. Their ardor continues to burn blindingly bright today.Despite Gomez’s current status as a loving family man, he’s connected to a decades-old deadly mystery in Jericho. Knowing tenacious Wednesday, it’s unlikely she’ll be able to leave this grim stone unturned.",
  },
];

let index = 0;
let bigImagesIndex = 3;

main.addEventListener("mousewheel", (event) => {
  if (event.deltaY === -100 && index !== 3) {
    index++;
    bigImagesArray[bigImagesIndex].style.top = "500px";
    setTimeout(() => {
      bigImagesArray[bigImagesIndex].style.visibility = "hidden";
      bigImagesIndex--;
      bigImagesArray[bigImagesIndex].style.visibility = "visible";
    }, 500);

    name.innerHTML = model[index].name;
    description.innerHTML = model[index].description;

    smallImages.style.top = parseInt(smallImages.style.top) - 110 + "px";
    smallImagesArray?.forEach((item, counter) => {
      if (index === counter) {
        item.style.width = "100px";
        item.style.height = "100px";
      } else {
        item.style.width = "80px";
        item.style.height = "80px";
      }
    });
  } else {
    index--;
    bigImagesIndex++;
    bigImagesArray[bigImagesIndex - 1].style.visibility = "hidden";
    bigImagesArray[bigImagesIndex].style.visibility = "visible";
    setTimeout(() => {
      bigImagesArray[bigImagesIndex].style.top = "0px";
    }, 500);

    name.innerHTML = model[index].name;
    description.innerHTML = model[index].description;

    smallImages.style.top = parseInt(smallImages.style.top) + 110 + "px";
    smallImagesArray?.forEach((item, counter) => {
      if (index === counter) {
        item.style.width = "100px";
        item.style.height = "100px";
      } else {
        item.style.width = "80px";
        item.style.height = "80px";
      }
    });
  }
});

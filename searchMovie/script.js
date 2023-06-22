const searchInput = document.querySelector("input");
const button = document.querySelector("button");
const movieContent = document.querySelector(".movie-content");
const movieWrapper = document.querySelector(".movie-wrapper");
const content = document.querySelector(".content");
let timer = 500;

const handleGenerateMovie = (movie) => {
  content.innerHTML = "";
  const genreArray = movie.Genre.split(",");
  document.querySelector(".text-info").style.display = "none";
  movieWrapper.style.height = "600px";
  content.style.height = "350px";
  setTimeout(() => {
    timer = 0;
    document.querySelector(".loading").style.display = "none";
    const movieText = document.createElement("div");
    const genre = document.createElement("div");
    const title = document.createElement("p");
    const rating = document.createElement("p");
    const plot = document.createElement("p");
    const cast = document.createElement("p");
    const image = document.createElement("img");

    movieText.classList.add("movie-text");
    title.classList.add("title");
    rating.classList.add("rating");
    genre.classList.add("genre");
    plot.classList.add("plot");
    cast.classList.add("cast");

    title.innerHTML = movie.Title;
    rating.innerHTML = `${movie.imdbRating} ⭐`;
    plot.innerHTML = `Plot: ${movie.Plot}`;
    cast.innerHTML = `Cast: ${movie.Actors}`;
    image.src = movie.Poster;
    genreArray.forEach((item) => {
      const genreName = document.createElement("span");
      genreName.innerHTML = item;
      genre.appendChild(genreName);
    });

    movieText.appendChild(title);
    movieText.appendChild(rating);
    movieText.appendChild(genre);
    movieText.appendChild(plot);
    movieText.appendChild(cast);

    content.appendChild(movieText);
    content.appendChild(image);
    content.classList.add("fade-in");
  }, 800);
};

const handleGetMovieData = async (movieName) => {
  content.classList.remove("fade-in");

  const response = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=426d12c8`
  );
  const jsonData = await response.json();

  if (jsonData.Response === "True") {
    setTimeout(() => {
      document.querySelector(".loading").style.display = "flex";
    }, timer);
    handleGenerateMovie(jsonData);
  } else {
    document.querySelector(".text-info").innerHTML = "Sorry, movie not found!";
  }
};

button.addEventListener("click", () => {
  handleGetMovieData(searchInput.value);
});

let image = document.querySelector(".image");
let dog1 = document.querySelector(".dog1");
let dog2 = document.querySelector(".dog2");

function dogBreed() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      let dogs = response.json();
      return dogs;
    })
    .then((data) => {
      let li = document.createElement("li");
      let img = document.createElement("img");

      image.src = data.message;
      img.classList = "img";
      ul.appendChild(li);
      li.appendChild(img);
    })
    .catch((err) => console.log("err", err));
}

dog1.addEventListener("click", () => {
  dogBreed();
});

dog2.addEventListener("click", () => {
  dogBreed();
});

dogBreed();

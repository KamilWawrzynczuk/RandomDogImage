const DOG_BREED_URL = "https://dog.ceo/api/breeds/list/all";
const DOR_RANDOM_BREED_URL =
  "https://dog.ceo/api/breed/Brabancon/images/random";

const doggos = document.querySelector(".doggos");
const breedSelect = document.querySelector(".select");

breedSelect.addEventListener("change", () => {
  let breedOption = breedSelect.options[breedSelect.selectedIndex].value;
  return (DOG_URL = `https://dog.ceo/api/breed/${breedOption}/images/random`);
});

///////////////

const promise_breed = fetch(DOG_BREED_URL);
promise_breed
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedPromise) {
    const breedArr = Object.keys(processedPromise.message);
    breedArr.forEach(e => {
      const optionBreed = document.createElement("option");
      optionBreed.value = e;
      optionBreed.innerText = e;
      breedSelect.appendChild(optionBreed);
    });
  });

//////////////

function addDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedPromise) {
      const img = document.createElement("img");
      img.src = processedPromise.message;
      img.alt = "Cute doggo";
      img.width = "200";
      doggos.appendChild(img);
    });
}

document.querySelector(".get-doggos").addEventListener("click", addDoggo);

const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".rating-btns");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      actualRating.innerHTML = rating.innerHTML;
    });
  });
});

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "flex";
  thanksContainer.classList.add("hidden");
});

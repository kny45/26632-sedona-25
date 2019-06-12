var searchButton = document.querySelector(".hotel-search-button");
var popup = document.querySelector(".modal-hotel-search");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hotel-search-close");
});

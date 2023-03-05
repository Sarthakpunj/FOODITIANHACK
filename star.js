const stars = document.querySelectorAll(".star-rating .fa-star");

stars.forEach(function(star) {
  star.addEventListener("click", function() {
    const rating = this.dataset.rating;
    setRating(rating);
  });
});

function setRating(rating) {
  stars.forEach(function(star) {
    if (star.dataset.rating <= rating) {
      star.classList.add("checked");
    } else {
      star.classList.remove("checked");
    }
  });
}
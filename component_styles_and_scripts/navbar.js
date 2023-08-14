document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.getElementById("ham-icon");
  const dropdownContainer = document.querySelector(".drpdwn-container");

  hamIcon.addEventListener("click", function () {
    dropdownContainer.classList.toggle("open");
  });
});

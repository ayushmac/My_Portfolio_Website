document.addEventListener("DOMContentLoaded", function () {
  const hamIcon = document.getElementById("ham-icon");
  const dropdownContainer = document.querySelector(".drpdwn-container");

  hamIcon.addEventListener("click", function () {
    dropdownContainer.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    const navigationBar = document.querySelector(".navigation-bar");

    // Check if the clicked element is not inside the navigation bar
    if (!navigationBar.contains(event.target)) {
      const isOpen = hamIcon.classList.contains("open");

      if (isOpen) {
        // Close the dropdown
        dropdownContainer.classList.remove("open");
        hamIcon.classList.remove("open");
      }
    }
  });
});

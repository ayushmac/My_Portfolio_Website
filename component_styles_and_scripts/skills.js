// Get all the input range elements and span elements with class "value"
const rangeInputs = document.querySelectorAll('input[type="range"]');
const valueSpans = document.querySelectorAll(".value");

// Add event listeners to each input range element (only for testing range input to see that whether it changes value or not)
rangeInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    // Update the corresponding span element's text with the input value
    valueSpans[index].textContent = input.value;
  });
});

// Function to update span values
function updateSpanValues() {
  rangeInputs.forEach((input, index) => {
    // Update the corresponding span element's text with the input value
    valueSpans[index].textContent = input.value + " %";
  });
}

// Add event listeners to each input range element
rangeInputs.forEach((input) => {
  input.addEventListener("input", updateSpanValues);
});

// Trigger the input event manually to update values on page load
updateSpanValues();

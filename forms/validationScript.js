// JavaScript code for form validation
const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  // Prevent form from submitting
  e.preventDefault();
  // Retrieve the input field value
  const input = document.getElementById("inputField");
  // Regular expression pattern for alphanumeric input
  const regex = /^[a-zA-Z0-9]*$/;

  // Check if the input value matches the pattern
  if (!regex.test(input.value)) {
    // Invalid input: display error message
    alert("Invalid input");
    return
  } 

  // Valid input: display confirmation and submit the form
  form.submit();
  alert("Input Confirmed!");
});

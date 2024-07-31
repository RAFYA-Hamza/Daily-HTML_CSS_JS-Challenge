document.getElementById("submit-button").addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  //   Get the email that the user tapped
  document.getElementById("email-error").textContent = "";

  //   Get the password that the user tapped
  document.getElementById("password-error").textContent = "";

  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const password = document.getElementById("password").value;

  // Test if the user enter the correct format of email
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent =
      "Enter a valid e-mail address";
  }

  // Test if the user enter at least 8 characters of the password
  if (password.length < 8) {
    document.getElementById("password-error").textContent =
      "Enter at least 8 characters";
  }
});

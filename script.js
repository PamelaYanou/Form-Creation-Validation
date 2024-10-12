document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("registration-form");
  let feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
     let username = document.getElementById("username").value.trim();
     let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("The minimum length for your username is 3.");
    }

   
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Please enter a valid email address.");
    }

   
    if (password.length < 8) {
      isValid = false;
      messages.push("Your password needs to be at least 8 characters long.");
    }

   
    feedbackDiv.style.display = "block"; 

    if (isValid) {
      
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; 
    } else {
      
      feedbackDiv.innerHTML = messages.join("<br>"); 
      feedbackDiv.style.color = "#dc3545"; 
    }
  });
});

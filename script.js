const button = document.querySelector("#send-button");
var form = document.querySelector(".email-container");
var input = document.querySelector(".email");
const showPseudo = document.querySelector(".email-container");
const errorText = document.getElementById("error-text");

button.addEventListener("click", function (event) {
  //event.preventDefault(); allows you to take control of the form submission process, perform custom actions, and decide whether to allow or prevent the default behavior associated with the form submission event.
  event.preventDefault();

  //You then check if the entered email is valid
  var emailValue = input.value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
  var emailValid = emailPattern.test(emailValue);

  //If the email is not valid, you apply some visual changes (adding error classes, displaying error messages).
  if (!emailValid) {
    input.classList.add("error");
    errorText.style.display = "block";
    showPseudo.classList.add("show");
  } else {
    //If the email is valid, you reset the form, remove error styles, and display a success message.
    form.reset();
    input.classList.remove("error");
    errorText.style.display = "none";
    showPseudo.classList.remove("show");
    alert("Thank You!");
  }
});

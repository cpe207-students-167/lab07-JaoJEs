// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetInput = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onclick = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmpasswordInput.onclick = () => {
  confirmpasswordInput.classList.remove("is-valid");
  confirmpasswordInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isComfirmPasswordOk = false;
  

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else if (firstNameInput.value ==="Niphitpon") {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else if (lastNameInput.value === "Thosap"){
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwordInput.value === "") {
    passwordInput.classList.add("is-invalid");
  } else if(passwordInput.value.length <6) {
    passwordInput.classList.add("is-invalid");
  } else if(passwordInput.value.length >=6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (confirmPasswordInput.value === "") {
    confirmPasswordInput.classList.add("is-invalid");
  } else if(confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.classList.add("is-invalid");
  } else if(confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.classList.add("is-valid");
    isComfirmPasswordOk = true;
  }

  if (
    isFirstNameOk
    && isLastNameOk
    && isEmailOk 
    && isPasswordOk
    && isComfirmPasswordOk
  ) alert("Registered successfully");
};

// add callback function for Reset button.
resetInput.onclick = () =>{
  // clear all input fields.
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passwordInput.value = "";
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

  confirmpasswordInput.value = "";
  confirmpasswordInput.classList.remove("is-valid");
  confirmpasswordInput.classList.remove("is-invalid");
}

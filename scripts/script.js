// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

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

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
  let isComfirmPasswordOk = false;
  

  // validate first name
  if (firstNameInput.value.length > 0) {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  } else{ 
    firstNameInput.classList.add("is-invalid");
 
  }


  // validate last name
  if (lastNameInput.value.length > 0)  {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  
  }

  // validate email
  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if(passwordInput.value.length <6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  // validate confirm password
  if (confirmPasswordInput.value === passwordInput.value) {
    confirmPasswordInput.classList.add("is-valid");
    isComfirmPasswordOk = true;
  } else  {
    confirmPasswordInput.classList.add("is-invalid");
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
resetBtn.onclick = () =>{
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



// // create reference for input fields.
// const firstNameInput = document.querySelector("#first-name-input");
// const lastNameInput = document.querySelector("#last-name-input");
// const emailInput = document.querySelector("#email-input");
// const passwordInput = document.querySelector("#password-input");
// const confirmPasswordInput = document.querySelector("#password-confirm-input");

// // create reference for buttons.
// const submitBtn = document.querySelector("#submit-btn");
// const resetBtn = document.querySelector("#reset-btn"); // เปลี่ยนชื่อให้สอดคล้องกับการใช้งาน

// // simple email validation
// function validateEmail(email) {
//   var atPos = email.indexOf("@");
//   var dotPos = email.lastIndexOf(".");
//   return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
// }

// // add callback function for input onkeyup event
// const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput];
// inputs.forEach(input => {
//   input.onkeyup = () => {
//     input.classList.remove("is-valid", "is-invalid");
//   };
// });

// // add callback function for submit button.
// submitBtn.onclick = () => {
//   let isFirstNameOk = firstNameInput.value.length > 0;
//   let isLastNameOk = lastNameInput.value.length > 0;
//   let isEmailOk = validateEmail(emailInput.value);
//   let isPasswordOk = passwordInput.value.length >= 6;
//   let isConfirmPasswordOk = confirmPasswordInput.value === passwordInput.value;

//   // validate first name
//   firstNameInput.classList.add(isFirstNameOk ? "is-valid" : "is-invalid");

//   // validate last name
//   lastNameInput.classList.add(isLastNameOk ? "is-valid" : "is-invalid");

//   // validate email
//   emailInput.classList.add(isEmailOk ? "is-valid" : "is-invalid");

//   // validate password
//   passwordInput.classList.add(isPasswordOk ? "is-valid" : "is-invalid");

//   // validate confirm password
//   confirmPasswordInput.classList.add(isConfirmPasswordOk ? "is-valid" : "is-invalid");

//   if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) {
//     alert("Registered successfully");
//   }
// };

// // add callback function for Reset button.
// resetBtn.onclick = () => {
//   inputs.forEach(input => {
//     input.value = "";
//     input.classList.remove("is-valid", "is-invalid");
//   });
// }

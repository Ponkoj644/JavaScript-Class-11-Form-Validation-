// Function //  ( Example 1: 1st method)

// function getFormValue() {
//   // This function varible
//   const nameInput = document.getElementById("full-name");
//   const nameValue = nameInput.value;
//   const errorText = document.getElementById("error-text");

//   //Function condition //
//   if (nameValue) {
//     console.log(nameValue);
//     errorText.innerHTML = "";
//     nameInput.value = "";
//   } else {
//     errorText.innerHTML = '<p class="text-dark">Please write your name </p>';
//   }
// }

// // addEventListener  : This is a method.
// const submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", getFormValue);

//---------------------------------------------------//

// Function //  ( Example : 2nd method method and we use this)
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  // This function varible
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-address");
  const addressInput = document.getElementById("full-address");

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const addressValue = addressInput.value;

  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");

  //Function condition //
  if (nameValue && emailValue && addressValue) {
    formData.innerHTML = `<p> Form Submitted by : ${nameValue}, Email : ${emailValue}, Address : ${addressValue} </p>`;
    errorText.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  } else {
    errorText.innerHTML = '<p class="text-dark">Please fill all input box </p>';
    formData.innerHTML = "";
  }
});

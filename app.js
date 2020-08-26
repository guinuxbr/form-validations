// Listeners
document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#zipcode").addEventListener("blur", validateZipcode);
document.querySelector("#phone").addEventListener("blur", validatePhone);
document.querySelector("#btn-reset").addEventListener("click", clearInput);
document.querySelector("#btn-submit").addEventListener("click", formSubmit);

// Variables used by more than one function
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const zipcode = document.querySelector("#zipcode");
const phone = document.querySelector("#phone");

function validateName() {
  const name_input_alert = document.querySelector("#name-input-alert");
  const name_message_alert = document.querySelector("#name-message-alert");

  const re = /^[A-Za-z]{2,10}$/;

  if (!re.test(name.value)) {
    name_message_alert.textContent = "Invalid user name! ";
    name_input_alert.classList.remove("is-hidden");
    return false;
  } else {
    name_message_alert.textContent = "";
    name_input_alert.classList.add("is-hidden");
    return true;
  }
}

function validateEmail() {
  const email_input_alert = document.querySelector("#email-input-alert");
  const email_message_alert = document.querySelector("#email-message-alert");

  const re = /^([\w\d\-\.]+)@([\w\d\-\.]+)\.(\w){2,5}$/;

  if (!re.test(email.value)) {
    email_message_alert.textContent = "Invalid email!";
    email_input_alert.classList.remove("is-hidden");
    return false;
  } else {
    email_message_alert.textContent = "";
    email_input_alert.classList.add("is-hidden");
    return true;
  }
}

function validateZipcode() {
  const zipcode_input_alert = document.querySelector("#zipcode-input-alert");
  const zipcode_message_alert = document.querySelector("#zipcode-message-alert");

  const re = /^[A-Z]{2,3}[0-9]{1,2}\ [0-9]{1}[A-Z]{2}$/;

  if (!re.test(zipcode.value)) {
    zipcode_message_alert.textContent = "Invalid zipcode!";
    zipcode_input_alert.classList.remove("is-hidden");
    return false;
  } else {
    zipcode_message_alert.textContent = "";
    zipcode_input_alert.classList.add("is-hidden");
    return true;
  } 
}

function validatePhone() {
  const phoneInputAlert = document.querySelector("#phone-input-alert");
  const phone_message_alert = document.querySelector("#phone-message-alert");

  const re = /^[\d]{3,4}-?[\d]{4}$/;

  if (!re.test(phone.value)) {
    phone_message_alert.textContent = "Invalid phone number!";
    phoneInputAlert.classList.remove("is-hidden")
    return false;
  } else {
    phone_message_alert.textContent = "";
    phoneInputAlert.classList.add("is-hidden");
    return true;
  }
}

function formSubmit() {
  const submitMessage = document.querySelector("#submit-message");
  if (validateName() && validateEmail() && validateZipcode() && validatePhone()) {
    submitMessage.classList.remove("is-hidden", "is-danger");
    submitMessage.classList.add("is-success");
    submitMessage.innerHTML = "Form submission test ok";
    setTimeout(() => {submitMessage.classList.add("is-hidden");}, 3000)
  } else {
    submitMessage.classList.remove("is-hidden");
    submitMessage.classList.add("is-danger");
    submitMessage.innerHTML = "Please check form fields";
    setTimeout(() => {submitMessage.classList.add("is-hidden");}, 3000)
  }
}

function clearInput() {
  name.value = "";
  email.value = "";
  zipcode.value = "";
  phone.value = "";
}

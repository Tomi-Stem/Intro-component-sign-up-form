const submitButton = document.querySelector('.form-button');
const errorMsg = document.querySelectorAll(".error-msg");
const errorIcon = document.querySelectorAll(".error-icon");

const validate = (e) => {
  e.preventDefault();
  const forms = document.querySelectorAll(".forms");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (forms[0].value < 1) {
    errorMsg[0].style.display = "block";
    errorIcon[0].style.display = "block";
  } else {
    errorMsg[0].style.display = "none";
    errorIcon[0].style.display = "none";
  }

  if (forms[1].value < 1)  {
    errorMsg[1].style.display = "block";
    errorIcon[1].style.display = "block";
  } else {
    errorMsg[1].style.display = "none";
    errorIcon[1].style.display = "none";
  }

  
  if (forms[2].value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMsg[2].style.display = "none";
    errorIcon[2].style.display = "none";

  } else {
    errorMsg[2].style.display = "block";
    errorIcon[2].style.display = "block";
  }

  if (forms[3].value < 1 ) {
    errorMsg[3].style.display = "block";
    errorIcon[3].style.display = "block";
    password.classList.toggle(".invalid");
  } 
  
  else {
    errorMsg[3].style.display = "none";
    errorIcon[3].style.display = "none";
    submitButton.classList.remove("error-msg");

    return true;
  }

  return false;
}

submitButton.addEventListener('click', validate);
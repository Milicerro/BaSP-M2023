var emailField = document.querySelector("#email");
emailField.onblur = function(event) {
  if (!emailOk(event.target.value)) {
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    emailField.nextElementSibling.innerText = "Your email is wrong"
  }else {
    emailField.classList.add("valid");
    emailField.classList.remove("invalid");
    emailField.nextElementSibling.innerText = "";
  }
}

emailField.onfocus = function(event) {
  emailField.classList.remove("invalid");
  emailField.classList.remove("valid");
  emailField.nextElementSibling.innerText = "";
}

var pass = document.querySelector("#password");
 pass.onblur = function(event) {
  var password = (event.target.value);
  var isOk = (hasNumbersAndChar(password));
  if (isOk) {
    pass.classList.remove("invalid");
    pass.classList.add("valid")
    pass.nextElementSibling.innerText = "";
  } else {
    pass.classList.add("invalid");
    pass.classList.remove("valid");
    pass.nextElementSibling.innerText = "Your password is wrong"
  }
}

pass.onfocus = function(event) {
  pass.classList.remove("invalid");
  pass.classList.remove("valid");
  pass.nextElementSibling.innerText = ""
}

var modal = document.getElementById("containerModal");
var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
});


var submitButton = document.querySelector("#form-button");
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  var email = document.getElementById("email");
  var emailValue = email.value;
  var pass = document.getElementById("password");
  var passValue = pass.value;
  var errorMessageElement = document.getElementById("error-message");
  var successMessageElement = document.getElementById("success-message");
  var urlDataElement = document.getElementById("url-data");

  if (!emailOk(emailValue) || !passOk(passValue)) {
    var errorMessage = validateAllInformation(emailValue, passValue);
    errorMessageElement.textContent = errorMessage;
    modal.style.display = "block";
  }else {
    var url = "https://api-rest-server.vercel.app/login?email=" + emailValue + "&password=" + passValue;
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (!response.success) {
        throw new Error(JSON.stringify(response));
      }
      var successMessage = "Login successful.\n" + "Email: " + emailValue + "  Password: " + passValue;
      successMessageElement.textContent = successMessage;
      urlDataElement.innerHTML = JSON.stringify(response);
      modal.style.display = "block";
      errorMessageElement.textContent = "";
    })
    .catch(function(error) {
      errorMessageElement.textContent = "An error occurred during the login process.\n " + error.message;
      modal.style.display = "block";
    });
  }
})

function validateAllInformation(email, password){
  var array = [];
  if(!emailOk(email)){
      array.push('The field Email is wrong ');
  }
  if(!passOk(password)){
      array.push('\nThe field Password is wrong ');
  }

  return array;
}

function emailOk(emailValue) {
  var emailExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(emailExpression.test(emailValue)) {
    return true;
  }else {
    return false
  }
}

function passOk(passValue) {
  if(hasNumbersAndChar(passValue)) {
    return true;
  }else {
    return false;
  }
}

function hasNumbers(myString) {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  for (var x = 0; x < myString.length; x++) {
    if (numbers.includes(myString[x])) {
      return true;
    }
  }
  return false;
}

function hasNumbersAndChar(passValue) {
  var num = 0;
  var char = 0;
  for (var x = 0; x < passValue.length; x++) {
    if (hasNumbers(passValue[x])) {
      num++;
    }else {
      char++;
    }
    if (num > 0 && char > 0) {
      return true;
    }
  }
  return false;
}
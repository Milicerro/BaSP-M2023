var emailExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailField = document.querySelector("#email");
emailField.onblur = function(event) {
  if (!emailExpression.test(event.target.value)) {
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
  var isOk = (password.length > 7 && hasNumbersAndChar(password));
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
var submitButton = document.querySelector("#form-button");
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  var email = document.getElementById("email");
  var emailValue = email.value;
  var pass = document.getElementById("password");
  var passValue = pass.value;

  if (!emailOk(emailValue) || !passOk(passValue)) {
    alert(validateAllInformation(emailValue, passValue))
  } else {
    var url = "https://api-rest-server.vercel.app/login?email=" + emailValue + "&password=" + passValue;
    fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(function(data) {
        alert("Login successful.\n" + "Email: " + emailValue + "  Password: " + passValue);
        alert("Request successful" + JSON.stringify(data));
      })
      .catch(function(error) {
        alert("An error occurred during the login process.\n" + error.message);
      });
  }
});

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
  if(passValue.length > 7 && hasNumbersAndChar(passValue)) {
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
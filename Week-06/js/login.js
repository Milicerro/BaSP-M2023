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

var submitButton = document.querySelector("#form-buttom");
submitButton.onclick = function(event) {
  event.preventDefault();
  var email = document.getElementById("email");
  var emailValue = email.value;
  var pass = document.getElementById("password");
  var passValue = pass.value;

if (!emailOk(emailValue) || !passOk(passValue)) {
  alert(validateAllInformation(emailValue, passValue))
} else {
  alert('login successfully')
}
}

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
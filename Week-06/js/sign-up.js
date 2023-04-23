var nameField = document.querySelector("#name");
nameField.onblur = function(event) {
  if (event.target.value.length > 3 && hasOnlyLetters(event.target.value)) {
    nameField.classList.remove("invalid");
    nameField.classList.add("valid");
    nameField.nextElementSibling.innerText = ""
  }else {
    nameField.classList.remove("valid");
    nameField.classList.add("invalid");
    nameField.nextElementSibling.innerText = "name invalid";
  }
}

nameField.onfocus = function(event) {
  nameField.classList.remove("invalid");
  nameField.classList.remove("valid");
  nameField.nextElementSibling.innerText = "";
}

var lasNameField = document.querySelector("#lastname");
lasNameField.onblur = function(event) {
  if (event.target.value.length > 3 && hasOnlyLetters(event.target.value)) {
    lasNameField.classList.remove("invalid");
    lasNameField.classList.add("valid");
    lasNameField.nextElementSibling.innerText = ""
  }else {
    lasNameField.classList.remove("valid");
    lasNameField.classList.add("invalid");
    lasNameField.nextElementSibling.innerText = "lastname invalid";
  }
}

lasNameField.onfocus = function(event) {
  lasNameField.classList.remove("invalid");
  lasNameField.classList.remove("valid");
  lasNameField.nextElementSibling.innerText = "";
}

var card = document.querySelector("#idCard");
card.onblur = function(event) {
  if (event.target.value.length > 7 && hasOnlyNumbers(event.target.value)) {
    card.classList.remove("invalid");
    card.classList.add("valid");
    card.nextElementSibling.innerText = ""
  }else {
    card.classList.remove("valid");
    card.classList.add("invalid");
    card.nextElementSibling.innerText = "ID invalid";
  }
}

card.onfocus = function(event) {
  card.classList.remove("invalid");
  card.classList.remove("valid");
  card.nextElementSibling.innerText = "";
}

var date = document.querySelector("#date");
date.onblur = function(event) {
  if (!dateOk(event.target.value)) {
    date.classList.add("invalid");
    date.classList.remove("valid");
    date.nextElementSibling.innerText = "Date invalid"
  }else {
    date.classList.add("valid");
    date.classList.remove("invalid");
    date.nextElementSibling.innerText = "";
  }
}

date.onfocus = function(event) {
  date.classList.remove("invalid");
  date.classList.remove("valid");
  date.nextElementSibling.innerText = "";
}

var phone = document.querySelector("#number");
phone.onblur = function(event) {
  if ((event.target.value.length === 10 && hasOnlyNumbers(event.target.value)) ) {
    phone.classList.remove("invalid");
    phone.classList.add("valid");
    phone.nextElementSibling.innerText = ""
  }else {
    phone.classList.remove("valid");
    phone.classList.add("invalid");
    phone.nextElementSibling.innerText = "phone number invalid";
  }
}

phone.onfocus = function(event) {
  phone.classList.remove("invalid");
  phone.classList.remove("valid");
  phone.nextElementSibling.innerText = "";
}

var address = document.querySelector("#address");
address.onblur = function(event) {
  if (addressOk(event.target.value)) {
    address.classList.remove("invalid");
    address.classList.add("valid");
    address.nextElementSibling.innerText = ""
  }else {
    address.classList.remove("valid");
    address.classList.add("invalid");
    address.nextElementSibling.innerText = "address invalid";
  }
}

address.onfocus = function(event) {
  address.classList.remove("invalid");
  address.classList.remove("valid");
  address.nextElementSibling.innerText = "";
}

var local = document.querySelector("#locality");
local.onblur = function(event) {
  if ((event.target.value.length > 3 && hasOnlyLetters(event.target.value)) ) {
    local.classList.remove("invalid");
    local.classList.add("valid");
    local.nextElementSibling.innerText = ""
  }else {
    local.classList.remove("valid");
    local.classList.add("invalid");
    local.nextElementSibling.innerText = "locality invalid";
  }
}

local.onfocus = function(event) {
  local.classList.remove("invalid");
  local.classList.remove("valid");
  local.nextElementSibling.innerText = "";
}

var zip = document.querySelector("#zip-code");
zip.onblur = function(event) {
  if ((event.target.value.length >= 4 && event.target.value.length <= 5 && hasOnlyNumbers(event.target.value)) ) {
    zip.classList.remove("invalid");
    zip.classList.add("valid");
    zip.nextElementSibling.innerText = ""
  }else {
    zip.classList.remove("valid");
    zip.classList.add("invalid");
    zip.nextElementSibling.innerText = "Zip-code invalid";
  }
}

zip.onfocus = function(event) {
  zip.classList.remove("invalid");
  zip.classList.remove("valid");
  zip.nextElementSibling.innerText = "";
}

var emailExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailField = document.querySelector("#mail");
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

var pass = document.querySelector("#pass");
 pass.onblur = function(event) {
  var password = (event.target.value);
  var isOk = (password.length > 7 && hasNumbersAndChar(password));
  if (isOk) {
    pass.classList.remove("invalid");
    pass.classList.add("valid")
    pass.nextElementSibling.innerText = "";
  }else {
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

var rePass = document.querySelector("#repeatpass");
rePass.onblur = function(event) {
  var password = (event.target.value);
  var isOk = (password.length > 7 && hasNumbersAndChar(password));
  if (isOk) {
    rePass.classList.remove("invalid");
    rePass.classList.add("valid")
    rePass.nextElementSibling.innerText = "";
  } else {
    rePass.classList.add("invalid");
    rePass.classList.remove("valid");
    rePass.nextElementSibling.innerText = "Your password is wrong"
  }
}

rePass.onfocus = function(event) {
  rePass.classList.remove("invalid");
  rePass.classList.remove("valid");
  rePass.nextElementSibling.innerText = ""
}

var submitButton = document.querySelector("#form-buttom");
submitButton.onclick = function(event) {
  event.preventDefault();
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

function hasNumbersAndChar(myString) {
  var num = 0;
  var char = 0;

  for (var x = 0; x < myString.length; x++) {
    if (hasNumbers(myString[x])) {
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

function hasOnlyNumbers(myString) {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var resultado = false

  for (var x = 0; x < myString.length; x++) {
    if (numbers.includes(myString[x])) {
      resultado = true;
    }else {
      resultado = false;
      return resultado
    }
  }
  return resultado;
}

function hasOnlyLetters(myString) {
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var resultado = false

  for (var x = 0; x < myString.length; x++) {
    if (!numbers.includes(myString[x])) {
      resultado = true;
    }else {
      resultado = false;
      return resultado
    }
  }
  return resultado;
}

function addressOk(direccion) {
  var cadenas = direccion.split(' ');
  if (cadenas.length > 2 || cadenas.length === 1) {
    return false;
  }else {
    var resultado = cadenas[0].length > 4 && hasOnlyLetters(cadenas[0]) ? true : false;
    resultado = hasOnlyNumbers(cadenas[1]) && resultado ? true : false;
    return resultado
  }
}

function dateOk(date) {
  if(!date) {
    return false;
  }
  var birthDate = new Date(date);
  var actualDate = new Date();
  if (birthDate.getTime() >= actualDate.getTime()) {
    return false;
  }
  return true;
}
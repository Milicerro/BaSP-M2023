var nameField = document.querySelector("#name");
nameField.onblur = function(event) {
  if (event.target.value.length > 3 && hasOnlyLetters(event.target.value)) {
    nameField.classList.remove("invalid");
    nameField.classList.add("valid");
    nameField.nextElementSibling.innerText = ""
  }else {
    nameField.classList.remove("valid");
    nameField.classList.add("invalid");
    nameField.nextElementSibling.innerText = "You must enter your name";
  }
}

nameField.onfocus = function(event) {
    nameField.classList.remove("invalid");
    nameField.classList.remove("valid");
    nameField.nextElementSibling.innerText = "";
}

var surnameField = document.querySelector("#surname");
surnameField.onblur = function(event) {
  if (surnameField.value.length > 3 && hasOnlyLetters(surnameField.value)) {
    surnameField.classList.remove("invalid");
    surnameField.classList.add("valid");
    surnameField.nextElementSibling.innerText = ""
  }else {
    surnameField.classList.remove("valid");
    surnameField.classList.add("invalid");
    surnameField.nextElementSibling.innerText = "You must enter your surname";
  }
}

surnameField.onfocus = function(event) {
    surnameField.classList.remove("invalid");
    surnameField.classList.remove("valid");
    surnameField.nextElementSibling.innerText = "";
}

var emailExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailField = document.querySelector("#email");
emailField.onblur = function(event) {
  if (!emailExpression.test(event.target.value)) {
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    emailField.nextElementSibling.innerText = "You must enter your email"
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

var sectionField = document.querySelector("#choose");
sectionField.onblur = function(event) {
    if(sectionField.value === "") {
        sectionField.classList.add("invalid");
        sectionField.classList.remove("valid");
        sectionField.nextElementSibling.innerText = "You must choose one"
    }else {
        sectionField.classList.add("valid");
        sectionField.classList.remove("invalid");
        sectionField.nextElementSibling.innerText = "";
    }
}

sectionField.onfocus = function(event) {
    sectionField.classList.remove("invalid");
    sectionField.classList.remove("valid");
    sectionField.nextElementSibling.innerText = "";
}

var textarea = document.querySelector("#message");
textarea.onblur = function(event) {
    if(textarea.value.length < 3 && !hasNumbersAndChar(textarea.value)) {
        textarea.classList.add("invalid");
        textarea.classList.remove("valid");
        textarea.nextElementSibling.innerText = "This field is required"
    }else {
        textarea.classList.add("valid");
        textarea.classList.remove("invalid");
        textarea.nextElementSibling.innerText = "";
    }
}

textarea.onfocus = function(event) {
    textarea.classList.remove("invalid");
    textarea.classList.remove("valid");
    textarea.nextElementSibling.innerText = "";
}

var submitButton = document.querySelector("#textarea-button");
submitButton.onclick = function(event) {
  event.preventDefault();
  var email = document.getElementById("email");
  var emailValue = email.value;
  var name = document.getElementById("name");
  var nameValue = name.value;
  var surname = document.getElementById("surname");
  var surnameValue = surname.value;
  var choose = document.getElementById("choose");
  var chooseValue = choose.value;
  var textarea = document.getElementById("message");
  var textareaValue = textarea.value;

if (!emailOk(emailValue) || !nameOk(nameValue) || !surnameOk(surnameValue) ||
   !chooseOk(chooseValue) || !textareaOk(textareaValue)) {
  alert(validateAllInformation(nameValue, surnameValue, emailValue, chooseValue, textareaValue));
} else {
  alert('Your menssage was sent successfully, thanks')
}
}

function validateAllInformation(name, surname, email, textarea, choose){
  var array = [];
    if(!nameOk(name)){
      array.push('The field Name is wrong ');
    }
    if(!surnameOk(surname)) {
    array.push('\nThe field Surname is wrong ')
    }
    if(!emailOk(email)){
    array.push('\nThe field Email is wrong ');
    }
    if(!chooseOk(choose)) {
        array.push('\nThe field Contact Reason is wrong')
    }
    if(!textareaOk(textarea)) {
        array.push('\nThe field Message is wrong')
    }
  return array;
}

function nameOk(nameValue) {
    if(nameValue.length < 3 && !hasOnlyLetters(nameValue)) {
      return false;
    }else {
      return true;
    }
  }
  function surnameOk(surnameValue) {
    if(surname.value.length > 3 && hasOnlyLetters(surnameValue)) {
      return true;
    }else {
      return false
    }
  }

function emailOk(emailValue) {
var emailExpression= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(emailExpression.test(emailValue)) {
        return true;
    }else {
        return false
    }
}

function textareaOk(textareaValue) {
    if(textarea.value.length < 3 && !hasNumbersAndChar(textareaValue)) {
        return false;
    }else {
        return true;
    }
}

function chooseOk(chooseValue) {
    if(choose.value === "") {
        return false;
    }else {
        return true;
    }
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

console.log('01-variables-and-operators');

/* a- Crear dos variables numéricas y utilizar el operador suma para guardar 
el valor de la suma de ambos números en una 3er variable.*/

console.log('excercise-01.a');

var firstNumber = 5;
var secondNumber = 5;
var thirdNumber = firstNumber + secondNumber;

console.log(thirdNumber);

// b- Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('excercise-01.b');

var myFirstName = 'Milagros';
var myLastName = 'Cerro';
var fullName = 'My full name is ' + myFirstName + ' ' + myLastName;

console.log(fullName);

/* c- Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/

console.log('excercise-01.c')

var drink = 'Mate';
var eat = 'cookies';
var snak = drink.length + eat.length;

console.log(snak);
console.log('02-strings');

/* a- Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/

console.log('excercise-02.a');

var myUser = 'milagros01';

console.log(myUser.toUpperCase());

/* b- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('excercise-02.b');

var myPw = 'Pepetheparroto6126';
var newPw = myPw.substring(0,5);

console.log(newPw);

/* c- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('excercise-02.c');

var duck = 'says ¡CUAK!';
var cuak = duck.substring(8,11);

console.log(cuak);

/* d- Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('excercise-02.d');

var messi = 'is the goat';
var messi10 = messi.substring(1,0);
var theGoat = messi.substring(1,11);

console.log(messi10.toUpperCase() + theGoat.toLowerCase());

/* e- Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/

console.log('excercise-02.e');

var lola = 'the cow';
var space = lola.indexOf(' ');

console.log(space);

/* f- Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('excercise-02.f');

var animal = 'hipopotamo velocista';
var elAnimal = animal.substring(0,1);
var superVeloz = animal.substring(10,12);
var elAnimalVeloz = animal.substring(1,10);
var elAnimalSuperVeloz = animal.substring(12,20);

console.log(elAnimal.toUpperCase()+ elAnimalVeloz.toLowerCase() + superVeloz.toUpperCase() + elAnimalSuperVeloz.toLowerCase());
console.log('06-functions');

/*a- Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/

console.log('excercise-06.a');

function suma(num1, num2) {
   return num1 + num2;
}

var resultado = suma(10, 5);

console.log(resultado);

/*b- Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y
retornar el valor NaN como resultado.*/

console.log('excercise-06.b');

function suma(num1, num2) {
    if (isNaN(num1)) {
        alert('NaN');
    } else if (isNaN(num2)) {
        alert('NaN');
    }
    return num1 + num2;
}

var resultado = suma(5,'hi');
console.log(resultado);

/*c- Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero
si es un número entero.*/

console.log('excercise-06.c');

function validateInteger(x) {
    if (Number.isInteger(x)) {
        return true;
    }else {
        return false;
    }
}

console.log(validateInteger(5.1));

/*d- Copiar y renombrar la función suma del ejercicio 6b), agregarle una llamada a la función del ejercicio 6c, 
que valide que los números sean enteros.
En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/

console.log('excercise-06.d');

function numbers(num1, num2) {
    if (num1 == Math.round(num1) !=0 || num2 == Math.round(num2) !=0) {
        alert('NaN');
    } else if (validateInteger(num1) == false) {
        alert('¡Error!');
    } else if (validateInteger(num2) == false) {
        alert('¡Error!');
    }
    return Math.round(num1) + Math.round(num2);
}

var resultado = numbers(5, 1.2);
console.log(resultado);

/*e- Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
función probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('excercise-06.e');

function validacion() {
    return numbers;
}

function otherFunction(a, b) {
   numbers (a + b);
   return Math.round (a + b);
}

var resultado = otherFunction(1, 1.1);
console.log(resultado);
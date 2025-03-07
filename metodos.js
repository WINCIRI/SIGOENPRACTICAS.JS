'use strict';

//  MÉTODOS (FUNCIONES) DE LOS STRINGS

// * Propiedad 'length' me da la longitud de un string

const frase = 'HOLA, que tal?';
console.log('frase.length-->',frase.length);//--> 14

// * Método toUperCase() o toLowerCase()

const fraseMayuscula = frase.toUpperCase();
const fraseMinuscula = frase.toLowerCase();

console.log('toUperCase-->', frase.toUpperCase());
console.log('toLowerCase-->', frase.toLowerCase()) ;

/* toUppersCase convierte en mayusculas el valor de 'frase'
   sería lo mismo que:
    * const fraseMayúscula = frase.toUperCase()

   toLowerCase convierte en minúsculas el valor de 'frase':
    * const fraseMinuscula = frase.toLowerCase()

   Estos métodos no reasignan el valor de frase a un 
   valor en mayúsculas o minúsculas sino que lo guarda en otro lado
   en este caso en otra variable que contiene la 
   misma información que 'frase' pero en mayúsculas o minúsculas
   es por ello que el siguiente console.log continúa
   mostrando el valor de 'frase' en minúscula, que es su valor original.
*/

console.log('valor original de frase-->',frase);

//* MÈTODO TRIM() --> borra los espacios que 
//pueda haber delante o detras de los strings

const fraseConEspacios = '      ciri       ';
console.log('frase con los espacios-->', fraseConEspacios);
console.log('usando trim-->', fraseConEspacios.trim());

/* *MÉTODO INDEXOF('susbstring') --> sirve para 
conocer el índice del substring que hemos puesto
en los paréntesis ej: si en la variable 
'frase' queremos saber la posición de la palabra
'que' hariamos: console.log(frase.indexOf('que'))
Si imprime -1 significa que no encontró el substring
*/

console.log(frase.indexOf('que'))

/* * MÉTODO INCLUDES('substring')--> sirve 
para averiguar si el 'substring' esta o no 
dentro del string original, devuelve siempre un buleano.
*/

console.log(frase.includes('HOLA'));

//METÓDO SLICE()--> sirve para cortar un trozo de string.

const cortaEnTrocitos = frase.slice(2, 7);
console.log(cortaEnTrocitos);

/* MÉTODO SPLIT()--> sirve para separar
un string en trozos y meterlo en un array
*/

const separaFrases = frase.split();
console.log(separaFrases)

//   MÉTODOS DE LOS NUMBERS

const num1 = 10;
const num2 = 3;

const division1 = num1 / num2;

console.log(division1);

/* MÉTODO TOFIXED()--> sirve para cortar los 
decimales en una posición concreta (cuantos decimales quieres)
devolviendo como resultado un 'string'
*/

const divisionConDosdecimales = division1.toFixed(2);
console.log(divisionConDosdecimales);

/*  CONVERTIR UN STRING EN NUMBER:

1--> PARSEINT() Y PARSEFLOAT() Son funciones que permiten 
transformar strings a número 

*/

const divisionConDosdecimalesnumber1 = parseInt(divisionConDosdecimales);
console.log(divisionConDosdecimalesnumber1);

const divisionConDosdecimalesnumber2 = parseFloat(divisionConDosdecimales);
console.log(divisionConDosdecimalesnumber2);

// * Number -->También transforma lo que le guardemos dentro en un number

const divisionConDosdecimalesnumber3 = Number(divisionConDosdecimales);
console.log(divisionConDosdecimalesnumber3);

// EJERCICIO PRÁCTICO.

// halla el 33% de 150€ y que tenga dos decimales
// y multiplica el resultado por diez

const precio = 150;
const porcentaje = 33.33;
const descuento = (150*33.33) / 100;
console.log('descuento-->', descuento);

const descuentoConDosDecimales = descuento.toFixed(2);
console.log('descuento con dos decimales-->', descuentoConDosDecimales);

const resultadoFinal = (descuentoConDosDecimales * 10);
console.log('resultadoFinal-->', resultadoFinal);

const resultadoFinalConDosDecimales = resultadoFinal.toFixed(2);
console.log(resultadoFinalConDosDecimales);

// string + number = string + number convertido a string = concatenacion
const resultadoFinalConDosDecimales2 = resultadoFinalConDosDecimales + 10;
console.log('último resultado con decimales-->', resultadoFinalConDosDecimales2);

// Al añadir el atributo NUMBER se convierten ambos operandos en numbers 
//y se efectua una suma normal.
const resultadoFinalConDosDecimales3 = Number(resultadoFinalConDosDecimales2) + 10;
console.log('último resultado con decimales-->', resultadoFinalConDosDecimales3);


// También puede darse lo siguiente:

const descuentoTodoSeguido = Number((150 * 0.333).toFixed(2)) + 10;
console.log(descuentoTodoSeguido);



 
































































































































































































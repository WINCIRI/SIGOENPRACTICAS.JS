// INTRODUCCIÓN
/*VARIABLES
var PrimeraLetraMayuscula = 'ciri';// NO
var 2NumeroAlPrincipio = 'ciri'; //No
var tildeYeñes ='hola'; // No
var kebab-case = 'ciri';// guiones No

var primeraLetraMinuscula = 'ciri'; //si
var numeroAlFinal2 = 'curu';//si
var palabrasEnCamelCase = 'ciri';//si
var guion_bajo = 'ciri';//si 
var _AlPrincipio = 'ciri';//si
var $AlPrincipio = 'ciri';//si */

//console.log() imprime en consola 
//el contenido del paréntesis. si son varias
//cosas deberán ir separadas por comas (,)ej:
console.log('primer elemento','segundo elemento', 'tercer elemento' , 'cuarto elemento', 345 );



//let y const son la forma correcta de 
//nombrar variables

let coche; //variable vacia util

coche = 'peugeot'; //asignar valor a let

let moto = 'honda';// crear y asignar valor a una variable
console.log(moto);
moto = 30 ;// cambio del valor de la variable
console.log(moto);

//const no admite variables sin valor
const camion = 'pegasus';
//no admite cambiar el valor posteriormente
//camion = 'mercedes' dará error

//    TIPOS DE DATO 
//(VALORES SIMPLES O PRIMITIVOS)


//Tipos de datos que se pueden guardar en 
//una variable:
//*strings o cadenas de texto ej:
const comillasSimples = 'Ciri';
const comillasDobles = "Ciri"; 
const backticks = `ciri`;

console.log(comillasSimples);
console.log(comillasDobles);
console.log(backticks);
//typeoff nos indica el tipo de dato
//que contiene una variable
console.log(typeof comillasSimples);
console.log(typeof comillasDobles);
console.log(typeof comillasSimples);
 
//Numbers  ej:
const edad = 36;
const edadString= '36'

console.log('edad-->', edad);
console.log(edadString);

console.log(typeof edad);
console.log(typeof edadString);

const gradosEnMoscu = -37;
const PI = 3.14159 ;

console.log(gradosEnMoscu);
console.log(PI);

console.log(typeof gradosEnMoscu);
console.log('typeOf PI-->',typeof PI);

/*Booleans o valores buleanos los que
solo admiten como respuesta dos opciones:
(si, no) (on, off) (1, 0)--> true, false ej:
*/
const estoyCasado = true;
console.log(estoyCasado);
console.log(typeof estoyCasado);

const tengoHijos = false;
console.log(tengoHijos);
console.log('typeOff--->', typeof tengoHijos);
/* otros tipos de datos:
undefined--> valor del string no definido,
se usa como valor predeterminado en variables 
a las que no les hemos puesto valor ej:*/

let valorNoDefinido;
console.log(valorNoDefinido)
console.log('typeof--->', typeof valorNoDefinido);

/*otro tipo de dato es:
null--> le otorgamos el valor null/nulo 
al string ej:*/
const nombreDeUsuario = null;
console.log(nombreDeUsuario);

/*la linea de abajo deberia devolver null pero
devuelve object y es debido a una curiosidad
de javascript, o un error no corregido */
console.log('typeof--->',typeof nombreDeUsuario );


// VALORES NO PRIMITIVOS
//ARRAYS--> [] --> para guardar varios 
//valores dentro de una variable ej:
const frutas = ['manzana', 'pera', 'uvas', 'ciruelas'];
console.log(frutas);
console.log('typeof-->', typeof frutas);

//OBJETOS--> {}--> para guardar varios datos 
//de un mismo elemento ej:
const persona = {nombre:'ciri', edad:35, sexo:'hombre'};
console.log(persona);
console.log('typeof-->', typeof persona);


//FUNCIONES--> Sirven para ejecutar 
//còdigo varias veces ej:
function sumar (num1, num2) {
    return num1 + num2;
}
console.log('typeof-->',typeof sumar);










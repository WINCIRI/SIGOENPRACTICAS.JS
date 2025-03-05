'use strict';
console.log('hola');// docs bien enlazados.

//Operadores matematicos

/*

*   + Suma o concatena strings
*   - Resta
*   * Multiplica
*   / Divide
*   % Modulo(resto de la division)

*/

// * SUMAR O CONCATENAR---> + ej:

const num1 = 5;
const num2 = 10;
const nombre = 'ciri ';
const apellido = 'Bokesa';

//en el parentesis a continuacion hay lo que 
//se llama una 'expresion' que no es otra cosa
// que cualquier cosa que va a convertirse 
//en un valor final( num1 o num1+num2-7/4 )

console.log(num1 + num2);// sumando numbers
console.log(nombre + apellido);//concatena strings

/* COSAS RARAS
 si '+' tiene un operando string tratara
 de convertir el otro a string*/

console.log('nombre + numero-->', nombre + num1);
console.log('nombre + null-->',nombre + null  );
console.log('nombre + booean-->',nombre + true  );
console.log('nombre + undefined-->',nombre + undefined );
console.log('string numerico + numero-->','5' + 5);

//RESTAR---> -

console.log('num1 - num2-->', num1 - num2);

/*  COSAS RARAS 
 Si uno de los operando es number, va a intentar
 convertir el otro a number para poder restarlos.
*/
console.log('num1 - true -->', num1 - true);
console.log('num1 - false -->',num1 - false);
console.log('num1 - null -->',num1 - null);
/* 
la resta percibe true = 1, false = 0
null = 0 y los puede restar
*/

console.log('nombre - apellido -->',nombre - apellido);
console.log('num1 - undefined -->',num1 - undefined);
/*  
aqui ^ al no poder asignar valor numerico 
a los operandos devuelve NaN indicando que is not a number
*/

//  MULTIPLICAR --> *

console.log('num1 * num2-->', num1 * num2);
console.log('num1 * null-->', num1 * null);
console.log('num1 * true-->', num1 * true);
console.log('num1 * false-->', num1 * false);
console.log('num1 * undefined-->', num1 * undefined);

/*
si escribimos dos asteriscos es como si 
hicieramos una potencia ej:
2 al cubo = 2**3
*/

console.log('num1 ** 3-->', num1 ** 3);

//  DIVIDIR--> /

console.log('num1 / num2-->', num1 / num2);
console.log('num1 / true-->', num1 / true);
console.log('num1 / false-->', num1 / false);
console.log('num1 / null-->', num1 / null);
console.log('num1 / undefined-->', num1 / undefined);

//  MODULO--> % --> El resto de una operacion
console.log('num1 % 2-->', num1 % 2);
console.log('10 % 2-->', 10 % 2);

/*
sirve para saber si un numero es 
multiplo de otro ej:
*/

//es 677 multiplo de 11??
console.log('677 % 11-->', 677 % 11);//6 -> no
//es multiplo de 11 

/*
el modulo se una entre otras cosas para 
saber si un numero es par o impar calculando
su modulo de 2: 677 % 2 seria impar.
Se daran muchos casos en los que deseemos 
saber si un numero es par o no.
*/

console.log('10 % 2-->', 10 % 2);//0-> es par
console.log('23 % 2-->', 23 % 2);//1-> es impar

/*
Igual que en matematicas, multiplicaciones 
y divisiones tienen preferencia sobre 
sumas y restas
*/
console.log(5 + 10 / 2);

/* 
Igual que en matematicas, lo que va entre
parentesis tiene preferencia.
*/
console.log(5 + (10 / 2));
console.log((5 + 10) / 2);

/*
Solemos concatenar nmbers con strings
para mostrar resultados, ya que al final se
convertira todo en string.
*/

const totalDeGrados = 5 * 9;
console.log(totalDeGrados + 'ºC');

        
//*=== Fin  Operadores  Matematicos ===*//
//*====================================*//

//OPERADORES DE ASIGNACIÓN

//const edad = 32;--> Asignación de valor

//Para reasignar valores usaremos let 

let edad = 36;
edad = 37;


edad = edad + 2;//-> asignación correcta(una expresión)
console.log(edad)

// la sentencia anterior se puede escribir   
//de forma mas simple  usando +=

edad += 5 //--> edad = edad + 5
console.log('suma', edad)

/*-->  
Esta formula sirve para cualquier oporador
matematico.
*/

edad -= 5; //--> edad = edad - 5
console.log('resta', edad)
edad *= 5; //--> edad = edad * 5
console.log('multiplicación', edad)
edad /= 5; //-->  edad = edad / 5
console.log('división', edad)
edad %= 5; //--> edad = edad % 5
console.log('resto', edad)

/*
En resumen para reasignar valor tenemos una:
            let num = 10 

* Forma larga:   num = num + 1 = 11.
* Forma reducida:      num += 1 = 11.

Y existe una forma de acortarlo màs pero solo 
en las sumas y restas

* Forma más reducida:  num++ = 11. Esta última 
forma realiza una reasignacion de valor 
siempre que se use, independientemente de su posición
también funciona ++num.

*/

//  OJITO CON HACER ESTO

/*const numero = 5;
numero++;--> al ser num una constante no se debe 
         //reasignar su valor.*/

let num = 23;
console.log('num-->', num);

let otroNum = num++;
console.log('otroNumero-->', otroNum);
/*Aquí estamos guardando en otroNum el valor 23
para otroNum y reasignando el valor de num a 
num + 1
*/
console.log('num-->', num);//--> num = 24

otroNum = ++num;
console.log('otroNumero-->', otroNum);
/*
Aquí estamos guardando como valor de ortoNum
el ultimo valor de num + 1 y además reasignando
el valor último de num ej, aqui sus valores son:
otroNum = ((num++ = 23+1) + 1)
num = ((num++ = 23 + 1) 1)
*/

console.log('num-->', num);








// CONDICIONALES  

//  IF-->Si se cumple esto.... haz esto

/* La sintaxis del IF es la siguiente:

    if (condición / pregunta) {
        haz esto
        haz esto
        haz esto
    }
*/  // ejemplo:

const num1 = 14;
/* todo lo que hay en el parentesis del if
tiene que ser 'true' para que el if 
 ejecute lo que hay en las 
*/

if (num1 > 5) {
    console.log('hola')
};


// OPERADORES CONDICIONALES--> Para hacer preguntas

    //  * Mayor que --> " > " ej:

if (300 > 145) {
    console.log('300 es mayor que 145')
};


    //  * Menor que --> " < " ej:

if (150 < 300) {
    console.log('150 es menor que 300')
};

    //  * Mayor o igual que --> ">=" ej:

    //  * Menor o igual que --> "<=" ej:


if ( 7 >= 7 ) {
    console.log('7 es mayor o igual que 7')
};

if ( 14 <= 30 ) {
    console.log('14 es menor o igual que 30')
};

    // * Igual que.. --> " == "

// No usar nunca un solo " = " para 
// hacer preguntas/ condicines. ej:

const nombre = 'ciri';
const edad = 18;

if (nombre == 'ciri') {
    console.log('Te llamas ciri')
};

if ( edad == 18) {
    console.log( ' ya eres mayor de edad')
};


    // * Igual que (este es el recomendado)--> ===

if ('18' === 18) {
    console.log('tienes 18')
};

/* el doble igual compara el valor de los
datos a comparar mientras que el triple
igual compara el valor y el tipo de dato
a comparar y si no son iguales devuelve false
la recomendacion es usar triple igual y si deseamos
comparar strings y numbers convertiremos 
en number los strings y despues compararemos
 */

    /* * Distinto a ...---> " != "
Al igual que con los iguales para usarlo
correctamente necesitariamos añadir un igual
de mas ya que sino javascript solo tiene 
en cuenta los valores a comparar y no tendria
en cuenta el tipo de dato.
*/

const num2 = 14;

if ('7' != 7) {
    console.log('false porque con un = js los toma como iguales')
};
if ('7' !== 7) {
    console.log('true porque con doble igual js sabe que son tipos de datos distintos')
};



//*============================*//
        //  //
//*============================*//

// AÑADIR MAS CONDICIONALES AL MISMO IF 

// * AND --> '&&' ej:
const miNombre = 'ciri';
const miEdad = 36;

if ( miNombre === 'ciri' && miEdad > 18) {
    console.log('Te llamas ciri, y efectivamente eres mayor de edad ');
};

/* AND requiere que ambas partes del
    && sean true para que la condición
    pueda ser true.
*/

/* * OR --> '||'
    El 'OR-->(||)' solo necesita que 
    uno de los lados sea true para que 
    el 'if' sea true ej:
*/ 

const email = 'ciriacos@gmail.com';

if (email.includes('gmail') || email.includes('hotmail')) {
    console.log('Tú eres usuario de google o de microsoft');
}

/* Extra !! Cuando queremos invertir un valor por el contrario
o queremos preguntar si algo NO es alguna cosa
utilizaremos el signo de admiraciónv '!'
Ej: 
*/

if (!email.includes('gmail')) [
    console.log('Tu email es de google')
];
if (email.includes('gimail') !== true) {
    console.log('Introduce un email válido para goolge')
};

const estasCasado = true;
if ( estasCasado) [
    console.log('viva los novios')
];

if (!estasCasado) {
    console.log('ya va siendo hora')
};
/*
 En los ejemplos anteriores, solo se mostrara en consola el console.log
 del if que se este cumpliendo siendo neceario cambiar el valor de la 
 variable tenida en cuenta a su opuesto para que se ejecute el otro if y no el primero
*/
// ============================================================//
  //=========================================================//

/* ELSE .... IF..--> en cambio si ocurre esto otro has aquello otro
Ej:
*/

const tuEdad = 3;
if (tuEdad < 10) [
    console.log('Eres todavía un niño')
]; else if (tuEdad >= 10 && tuEdad < 18) {
    console.log('estas en la adolescencia')
} else if (tuEdad >= 18 ) {
    console.log('eres mayor de edad')
}
/* a fuera de este if podriamos poner otro if referido a la 
 misma variable pero si tenemos alguna otra 
 condición para ese if también podemos meterlo como un 'else if'
*/

/* Trabajaremos con else if en lugar de unicamente IFs
para favorecer que el codigo leido sea solo el que deba leerse. En el ejemplo anterior segun 
la edad que se establezca en 'tuEdad' con if se leeria todo el codigo con IFs 
en cambio con ' else if ' solo se leera la linea de codigo que cumpla con la codicion de ser 100 % true
*/

// ============================================================//
  //=========================================================//

/* Else ...-->... si nada de lo anterior se cumple, ejecuta esto y  precisa de 
'IF' delante o un grupo formado de un IF + varios ELSE IFs delante 
 Ej:
 */

 const estoyCasado = false;
 if (estoyCasado) {
    console.log('Ole tú')
 } else {
    console.log('A QUÉ ESPERAS')
 };

 /*
 Ojo porque da igual lo que haya puesto en el if... si no se cumple, 
 irremediablemente entrará en el 'else' 
 "por narices".
 Ej: */

const fruta = 'manzana';
if ( fruta === 'mazana'    ) {
    console.log('Man sana in corpore sana');
} else {
    console.log('non eres saniti');
}

//===================================================//
    //============================================//

    /* EXTRA!!!

javascript interpreta algunos valores como 
verdaderos (truthy) y otros como falsos (falsy)
   Ej: */

const valor = true;
if (valor) {
    console.log('Es verdadero ');
} else {
    console.log('Es falso');
}

























































































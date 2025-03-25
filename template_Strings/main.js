// Antigua forma de concatenar:

const nombre = 'ciri';
const apellidos = 'bokesa';
const edad = 36;

const nombreCompleto = nombre + ' ' + apellidos
// el string vacio es para generar espacio entre las variables.

const saludoCompleto = 'Hola, me llamo' + ' ' + nombre + ' ' + apellidos + ' ' + 'y tengo' + ' ' + edad + ' ' + 'años';

// Template strings o interpolar datos 

/* Con las comillas (``) puedo introducir un string con espacios sin tener que incluir 
strings vacios ('') y me permite meter expresiones javascript, de modo que podemos
acceder a las variables declaradas empleando  la siguiente estructura:
(${'aqui iria la expreion'}) simplificando y facilitando asi el trabajo. */

const saludoCool = `Hola, me llamo ${nombre}  ${apellidos} y tengo ${edad}`

/* Además permite hacer saltos de linea sin romper el string */

const saludoCoolEnVariasLineas = `Hola,
me llamo ${nombre} ${apellidos} 
y tengo ${edad}.`





console.log(nombreCompleto);
console.log(saludoCompleto);
console.log(saludoCool);
console.log(saludoCoolEnVariasLineas);

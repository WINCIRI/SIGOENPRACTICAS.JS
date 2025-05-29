// Primera forma de hacer condicionales

const color = 'rojo';

if (color === 'rojo') {
    console.log('El color de la pasión');
} else if ( color === 'amarillo'){
    console.log('El color del sol');
} else if (color === 'verde') {
    console.log('El color de la esperanza');
} else {
    console.log('No es un color valido');
};


/* CONDICIONALES CON SWITCH
   Deberiamos usarlo solo cuando necesitemos
   ejecutar codigo segùn valores muy determinados. Ej:
   para colores, días de la semana, meses del año
   estaciones, generos de peliculas...
*/   

switch (color) {
    case 'rojo' : {
        console.log('El color de la pasión');
        break;
    }
    case 'amarillo' : {
        console.log('El color del sol');
        break;
    }
    case 'verde' : {
        console.log('El color de la esperanza');
        break;
    }
    default: {
        console.log('El color no es valido');
        break;
    }
}

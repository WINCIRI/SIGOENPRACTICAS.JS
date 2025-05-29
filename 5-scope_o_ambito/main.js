'strict only'

// Ámbito de las variable.


// Ámbito global !! 

const nombreChico = 'ciri';
let nombrePerra = 'anastasia';



if (6< 8) {

// Acceso a variable en bloque ( Las llaves generan bloques)
// Se imprime porque fueron definidas en ambito general

    console.log(' Acceso nombreChico en bloque -->',nombreChico);
    console.log('accseo nombrePerra en bloque -->', nombrePerra);

 // modificamos la variable dentro del bloque
    nombrePerra = 'katiuska'; 
    console.log(nombrePerra);


// Si defino la variable dentro del bloque se genera el Ámbito Local:
// Se imprime porque esta dentro de su ambito.
    const nombreChica = 'mi_reina'
 
    console.log(' Acceso nombreChica en bloque-->', nombreChica);


// Anidamos un bloque dentro de otro.
    if (5 < 7) {
         const edad = 45
         console.log('bloque dentro de bloque-->',edad); 
    // se imprime, está dentro de su bloque

    // Si empleamos 'VAR' para definir la variable, esta será accesible desde cualquier lado.
         var fruta = 'manzana';
        }

   

// Acceso a variable fruta fura de su bloque
        
        console.log('fruta -->',fruta);

}


    

// Acceso a variable desde cualquier punto del archivo. 

console.log(' Acceso nombreChico fuera de bloque -->', nombreChico);

console.log(' Acceso nombrePerra fuera bloque-->', nombrePerra);



//console.log(' Acceso nombreChica fuera bloque-->', nombreChica); 
/* no se impreme porque ha sido definida en ambito local y por tanto no se puede 
 emplear fuera de este.
*/


    console.log('acceso desde fuera de los bloque-->', fruta);
// acceso a fruta desde fuera de su bloque. Funciona ya que 
// VAR siempre define las vaiables en ambito global o como si lo estuvieran



/* El objeto más global sellama 'window'
   y al imprimirlo en consola podemos ver 
   las variables creadas con var son añadidas 
   al  objeto automaticamente permitiendo que 
   podamos usarlas en todo el documento.
*/

console.log(window.fruta);
 
//    console.log('segunda impresion edad-->', edad);
// No se imprime, esta fuera de su bloque pero las 
// variable definidas fuera si se imprimen en el ambito local mas pequeño
    

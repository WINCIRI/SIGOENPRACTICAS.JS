//* Console.log --> imprime en consola

    console.log('Esto es un console.log');

//* Alert() --> muestra una ventana de alerta

    alert('Hola soy una alerta') //* la alerta frena la ejecucion.

    console.log('Yo no me imprimo hasta que le hayas dado a aceptar o apreites ESC');

//* Prompt() --> pide al usuario un imput
//* el prompt también frena la ejeccion

//*prompt('dime tu edad') 
//* escrito como en la linea anterior el prompt no ejecutara nada
//* debido a que debe formularse como una variable pues se va 
//* a guardar informacion ej:
 const edadUsuario = prompt ('dime tu edad');

 console.log(edadUsuario);

 /*
     un prompt puede guardar:
     si no escribes nada,un string vacio
     escribas lo que escribas, lo guardara como string
     si le das a cancelar guardara el valor 'NULL'
*/
/* prompt siempre devuelve strings de modo que si queremos manejar los numeros, 
habra que convertirlos a number
*/
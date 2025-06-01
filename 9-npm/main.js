


 //prueba de naniod
 import { nanoid } from "./node_modules/nanoid/nanoid.js";
console.log(nanoid());

//* NODE PACKAGE MANAGER (otros gestores fiables de paquetes son: 'YARN' & 'PNPM', ambos compatibles con NODE )

/*

    NPM es un servidor que proporciona codigo ya construido con la finalidad de 
    de acortar los tiempos de construccion de nuestros proyectos igual que haria boostrap
*/

/* 

    Para usar NPM correctamente debemos seguir los siguientes pasos:

    - Entrar a la página de NPM
    - Escribir en el buscador el nombre del paquete 
    - Fijarse siempre en el número de descargas semanales como test de seguridad
    - Tener en cuenta que por cada proyecto sera necesario descargar los paquetes que necesitemos para que todo funcione como queremos

*/

/*   el package.jason (diario de a bordo de todo lo que tiene o le falta a mi proyecto/ posible paquete...) indica que estamos contruyendo 
     un proyecto en el directorio en el que estamos y para instalarlo ejecutaremos npm init en la terminal
     lo cual nos obliga a responder a una serie de preguntas opcionales que podemos evitar añadiendo una -y
     tras la creacion del package.jason podremos instalar paquetes con el comando :
     npm install/i "nombre paquete sin comillas"
*/
/*  al instalar un paquete se crea automaticamente una carpeta 'node_modules' la cual puede llegar a pesar 
    tanto que dificulte la subida del proyecto a la nube y es por ello que no es costumbre subirla con las
    actualizaciones que compartamos en la nuve. Para indicar que no debe subirse lo hacemos a traves del arcivo .gitignore
    el cual nos permite indicar el nombre de los archivos a ignorar cuando compartamos el proyhecto. En contraposicion tenemos 
    el archivo package.jason que indicara de forma detallada que dependencias nos hacen  falta para echar a correr nuestro proyecto
    en otro dispositivo. El package.jason contiene un apartado dedicado a los paquetes que se usaron en la creacion inicial del
    proyecto y por tanto indica que paquetes le harian fa


/*  PAQUETES MAS HABITUALES UTILIZADOS
                Y SUS FUNCIONES

NANOID:.- ayuda a generar identificadores ùnicos y aleatorios.
PACKAGE.JASON:.- contiene informacion del proyecto. 
CODI.LINK :.- dividiendo en 4 la pantalla nos permite ver a la vez el codigo html, css, javascript y el resultado en el navegador.


    

*/        

/* 
desarrollar un proyecto implica tener archivos que no desearemos compartir en la nube
ya sea por su tamaño o contenido prescindible y para mantenerlos en local usaremos
un archivo gitignore, y en el escribiremos el nombre de aquellos archivos 
que no queremos subir.
*/ 



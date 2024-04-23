// Una libería para poder acceder a los archivos del sistema
//Hacemos una instancia de una ibrería
/*Ejercicio usando file system*/ 
const fs = require('fs');

const userName = 'David';
const lastName = 'Sánchez'

fs.writeFile('user-data.txt', 'Nombre: '+userName +'\nApellido: ' +lastName, (err)=>{
    if(erro =  null){
        console.log(err);
        return
    }
    console.log('Hackeando NASA 20%');
    console.log('Hackeando NASA 40%');
    console.log('Hackeando NASA 60%');
    console.log('Hackeando NASA 80%');
    console.log('Hackeando NASA 100%');
    console.log('Felicidades ha creado un archivo')
});
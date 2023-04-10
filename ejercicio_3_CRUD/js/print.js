const fs = require('fs');

//1.- Crear una función que permita leer el archivo e imprimir en consola el arreglo de Koders

function getKoders() {
    fs.readFile('./koder.json', 'utf8', (error, data) => {
        if (error) {
            console.log('Error: ', error)
            return;
        }
        let koderParseado = JSON.parse(data)
        console.log(koderParseado.koders)
    })
}
getKoders()
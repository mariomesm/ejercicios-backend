// 2.- Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado

const fs = require('fs');
let newKoder = {
    "id": 3,
    "name": "Jose",
    "lastname": "Perez",
    "age": 28,
    "favoriteFood": "Pasta"
}
function newKoderJson(koder) {
    fs.readFile('./koders.json', 'utf8', (error, data)=>{
        if(error){
            console.log(error)
         }
         else{
            let info = JSON.parse(data);
            info.koders.push(koder)
            fs.writeFile('./koders.json',JSON.stringify(info,null,"  "),(error)=>{
                if(error){
                    console.log(`Hubo un error ${error}`)
                    return
                }
                else{
                    console.log("Registro exitoso")
    
                }
                console.log(info)
            })
        }
    })
}
newKoderJson(newKoder)
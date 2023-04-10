// 3.- Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
 

const fs = require("fs")

function deleteKoders(id){
    fs.readFile("koders.json", "utf-8", (error, data) => {
        if (error) {
            console.log(error)
        } 
        else {
            let infoKoder = JSON.parse(data);
            resultFilter = infoKoder.koders.filter(item => item.id != id)
            
        }
        fs.writeFile("./koders.json",JSON.stringify(resultFilter,null,"    "),(err) => {
            if (err) {
                console.log("Ocurrio un error",err)
            }
            else{
                console.log("Se elimino con exito el id",id)
            }
    })
})
}
deleteKoders("3")
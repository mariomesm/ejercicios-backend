 //5.- Crear una función que permita obtener a los koders que sean mayores a 25 años

const fs = require('fs');

 function validationByKoder (){
    fs.readFile("./koders.json","utf-8",(error,data)=>{
        if(error){
            console.log("Ocurrio un error",error)
        }
        else{
            let parseOfData = JSON.parse(data)
            let koder = parseOfData.koders.filter(koder => koder.age > 25)
            console.log(koder)
        }
    })
 }
 validationByKoder()
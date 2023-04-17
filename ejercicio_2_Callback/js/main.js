function check (error,data){
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
}
function goToSuperMarket (callback){
    console.log("Yendo al super mercado")
    callback(null,"LLegue al super mercado")
}

function choosePantry (callback){
    console.log("Escogiendo la despensa")
    callback(null,"Ya tengo la despensa")
}


function payinCash (callback){
    console.log("Estoy pagando en caja")
    callback(null,"Listo paso la tarjeta")
}

function goToHome (callback){
    console.log("Estoy saliendo del super mercado")
    callback(null,"Ya llegue a casa")
}
goToSuperMarket(check)
choosePantry(check)
payinCash(check)
goToHome(check)

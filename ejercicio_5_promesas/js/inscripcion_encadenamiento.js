const koder ={
    name:"Mario",
    interview:false,
    proposalSent:false,
    isEnrrolled:false,
    introductoryCourse:false
};

function fillForm (fillFormInterview){
    return new Promise((resolve,reject)=>{
        console.log(`${fillFormInterview.name}, llena todos los campos del Formulario`);
        setTimeout(() => {
            let error = null;
            fillFormInterview.interview = true;
            if(!fillFormInterview.interview){
                error = "ocurrio un error en el llenado del formulario";
                reject(error)
            }
            resolve(fillFormInterview)
        },3000);
    })
}
function proporsal (fillProporsal){
    return new Promise((resolve,reject)=>{
        console.log(`${fillProporsal.name},lee la propuesta que se te mando para la inscripción`);
        setTimeout(()=>{
            let error = null;
            fillProporsal.proposalSent = true;
            if(!fillProporsal.proposalSent){
                error = "Si algo no esta correctamente escrito comunicate por este correo";
                reject(error);
            }
            resolve(fillProporsal);
        },3000)
    })
}
function contract (fillContract){
    return new Promise((resolve,reject)=>{
        console.log("LLena los campos del contrato");
        setTimeout(()=>{
            let error = null;
            fillContract.isEnrrolled = true;
            if (!fillContract.isEnrrolled){
                error = "No estan todos los campos llenos";
                reject(error);
            }
            resolve(fillContract);
        },3000)
    })
}
function introductory (course){
    return new Promise((resolve,reject)=>{
        console.log("Bienvenido al curso de introduccion, valida tus credenciales para entrar a tu clase");
        setTimeout(()=>{
            let error = null;
            course.introductoryCourse = true;
            if(!course.introductoryCourse){
                error = "Tus credenciales son erroneas";
                reject(error);
            }
            resolve(course.introductoryCourse);
           //console.log(course)
        })
    })
}

fillForm(koder)
    .then((personInterview)=>{
    console.log(`${personInterview.name}, gracias por realizar el proceso en breve mandaremos un correo para el sigueinte proceso`);
    return proporsal(personInterview)
    .then((fillProporsal)=>{
        console.log(`Datos correctos`);
        return contract(fillProporsal)
    })
    .then((fillContract)=>{
        console.log(`Tus datos fueron enviados exitosamente ${fillContract.name}`);
        return introductory(fillContract)
    })
    .then((course)=>{
        console.log(`Estas listo para este desafio.`);
    })
})
    .catch((error)=>{
        console.log(`Lo lamento ${error}`);
    })
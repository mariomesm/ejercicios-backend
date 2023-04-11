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

async function admissionKoder(){
    const admissionForm = await fillForm(koder);
    console.log(`${admissionForm.name}, gracias por realizar el proceso en breve mandaremos un correo para el sigueinte proceso`);

    const proporsalKoder = await proporsal(admissionForm);
    console.log(`Datos correctos`);

    const contractKoder = await contract(proporsalKoder);
    console.log(`Tus datos fueron enviados exitosamente ${contractKoder.name}`);

    const courseKoder = await introductory(contractKoder);
    console.log(`Estas listo para este desafio.`);

    return "Finalización de admisión del koder"
}

admissionKoder()
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(`Error ${error}`)
    })
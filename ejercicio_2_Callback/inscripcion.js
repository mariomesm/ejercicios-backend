/**
 * utilizar callbacks y timeouts
 * 
 * LLenar un formulario / entrevista 
 * mandar propuesta 
 * llenar contrato
 * tomar curso de introduccion 
 * 
 * const koder ={
 *  name:"Mario",
 *  interviewed:false,
 *  proposalSent:false,
 *  isEnrrolled:false,
 *  introductoryCourse:false
 *  }
 */


const koder ={
    name:"Mario",
    interviewed:false,
    proposalSent:false,
    isEnrrolled:false,
    introductoryCourse:false
   }


function fillForm (koder,callback){
  console.log(`${koder.name},llena los campos del formulario`);

  setTimeout(() => {
      let error = null;
      koder.interviewed = true;
      if (!koder.interviewed){
          error = "La entrevista sera reprogramada";
      }
      callback(error,koder);
  }, 2000)
}
function proporsal (koderToProposal,callback){
  console.log("Verifique su correo, le enviamos su propuesta para el curso ");
  setTimeout(()=>{
      let error = null;
      koderToProposal.proposalSent = true;
      if(!koderToProposal.proposalSent){
          error = "La propuesta no ha sido del agrado";
      }
      callback(error,koderToProposal);
  },2000)
}
function fillContract (koderIsEnrrolled,callback){
  console.log("Verifica que sus datos esten correctos");
  setTimeout(()=>{
      let error = null;
      koderIsEnrrolled.isEnrrolled =true;
      if(!koderIsEnrrolled.isEnrrolled){
          error = "Mis datos no estan correctos";
      }
      callback(error,koderIsEnrrolled);
  },2000)
}
function course(koderCourse,callback){
  console.log("Valida que tus accesos esten correctos");
  setTimeout(()=>{
      let error = null;
      koderCourse.introductoryCourse = true;
      if(!koderCourse.introductoryCourse){
          error = "Mis aceesos son invalidos "
      }
      callback(error,koderCourse);
  },2000)
}

fillForm(koder,(error,dataKoder)=>{
  if(error){
      console.log(error);
      return
  }else{
      console.log(`${dataKoder.name} fue entrevistado`);
      //console.log(dataKoder);
      proporsal(koder,(error,koderToProposal)=>{
          if(error){
              console.log(error)
              return
          }else{
              console.log("La propuesta fue aceptada")
              //console.log(koderToProposal)
              fillContract(koder,(error,koderIsEnrrolled)=>{
                  if(error){
                      console.log(error)
                      return
                  }else{
                      console.log("Gracias por firmar el contrato")
                      //console.log(koderIsEnrrolled)
                      course(koder,(error,koderCourse)=>{
                          if(error){
                              console.log(error)
                          }else{
                              console.log("Listo ya pude acceder a las clases")
                              console.log(koderCourse)
                          }
                      })
                  }
              })
          }
      })
  }
})
import express, { response } from "express"
import fs from "fs"
import { request } from "http"

const router = express.Router() //creamos el router

router.get("/", async(request,response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json","utf8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    let filterMentor = mentors
    const {module,generation,age,x} = request.query
    if(module){
        filterMentor = filterMentor.filter(mentor => mentor.module === module)
    }
    if(age){
        filterMentor = filterMentor.filter(mentor=> mentor.age ===parseInt(age))
    }
    if(generation){
        filterMentor = filterMentor.filter(mentor => mentor.generations.includes(generation))
    }
    if (x){
        filterMentor = filterMentor.filter(mentor =>mentor.age > parseInt(x))

    }

    response.json({
        success:true,
        data:{
            mentors:filterMentor
        }
    })

})
router.get('/:id',async(request,response)=>{
    const dataFile = await fs.promises.readFile("kodemia.json","utf8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    const idmentor = parseInt(request.params.id)
    let filterMentor = mentors.filter(item => item.id === idmentor)
    response.json ({
        success: true,
        data:{
            mentors:filterMentor
        }
    })
})

router.post('/',async(request,response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json","utf8");
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    const newMentor = request.body
    json.mentors.push(newMentor)
    
    await fs.promises.writeFile('./kodemia.json',JSON.stringify(json,null,"  "),"utf8");

    const menssage ={
        success: true,
        mentors:mentors,
        menssage: "Se agrego un nuevo mentor"
    }
    response.json(menssage)
})

router.patch("/:id",async(request,response)=>{
    const dataFile = await fs.promises.readFile("./kodemia.json","utf8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    const info = request.body
    const id = parseInt(request.params.id)
    let filterMentor = mentors.filter(mentor => mentor.id === id)
    console.log(filterMentor)
    mentors.splice(filterMentor,1,info)
    await fs.promises.writeFile("./kodemia.json",JSON.stringify(json,null,"  "),"utf8")
    response.json({
        success:true,
        data:{
            mentors:info
            
        }
    })

})
router.delete("/:id",async (request,response)=>{
    const dataFile = await fs.promises.readFile("./Kodemia.json","utf8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    const id = parseInt(request.params.id)
    console.log(typeof id)

    let filterMentor = mentors.filter(mentor => mentor.id != id)
    mentors.splice(filterMentor,1)
    await fs.promises.writeFile("./kodemia.json",JSON.stringify(json,null,"  "),"utf8")

    response.json({
        success:true,
        menssage: "Se elimino un Mentor "
    })
})

export default router
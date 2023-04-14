import express from 'express'
import mentor from "./mentor.js"

const port = 8080;
const server = express();
server.use(express.json());
server.use("/mentors",mentor)

server.listen(port,()=>{
    console.log("server listening on port",port)
})
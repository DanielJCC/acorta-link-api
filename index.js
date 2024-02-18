import express, {json} from "express";

const app = express()
app.use(json())

app.get('/',(req,res)=>{
    res.json({message : "Esta es la API para el acortador de links"})
})

const PORT = process.env.PORT ?? 1234
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})
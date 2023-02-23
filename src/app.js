const express=require("express");
const coneccion = require("./coneccion/coneccion");
const app=express();

const {PORT}= require("./coneccion/variables");

app.get("/", (req, res)=>{
    coneccion.query("SELECT * FROM usuarios",(err, result)=>{
        if(err){
            console.log("hay un error")

        }else{
            res.json(result)
        }

    })
})


app.listen(PORT);
console.log("esta escuchando en el puerto "+ PORT)


const express=require("express");
const coneccion = require("./coneccion/coneccion");
const app=express();



app.get("/api", (req, res)=>{
    coneccion.query("SELECT * FROM usuarios",(err, result)=>{
        if(err){
            console.log("hay un error")

        }else{
            res.json(result)
        }

    })
})

const PORT= process.env.PORT || 1000
app.listen(PORT);
console.log("esta escuchando en el puerto "+ PORT)


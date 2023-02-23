const sql =require("mysql2");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER }=require=("./variables")



const coneccion= sql.createConnection({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_NAME
});

coneccion.connect((err)=>{
    if(err){
        console.log("coneccion no establecida")
    }else{
        console.log("coneccion exitosa")
    }
});


module.exports = coneccion;

const sql =require("mysql2");

 const  DB_HOST= process.env.DB_HOST || "localhost";
 const DB_USER= process.env.DB_USER || "root";
 const DB_PASSWORD= process.env.DB_PASSWORD || "imperio8234";
 const DB_NAME =process.env.DB_NAME || "tareas";
 const DB_PORT =process.env.DB_PORT || "3306";



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

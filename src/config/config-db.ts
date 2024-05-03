import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0
  });

  db.getConnection((err, connection) =>{
    if(err){
      console.log("Error al conectar a la base de datos", err);
      if(connection){
      connection.release;
    }
    return;
  }
  console.log("conexion exitosa a la base de datos");

  });
  
export default db.promise()

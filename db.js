const mysql = require("mysql2");

const {PORT,DB_DATABASE,DB_HOST,DB_PASSWORD,DB_PORT,DB_USER} = require("./config.js");

const conexion = mysql.createConnection({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT
})

conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos: ', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});


module.exports = conexion;
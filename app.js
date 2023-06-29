const express = require("express");
const app = express();
const empleadosRoute = require('./routes/empleados.js');
const librosRoute = require('./routes/libros.js');
const {PORT} = require("./config.js")

const path = require('path');


//settings
app.use(express.static(__dirname+'/views'))
app.use(express.static(__dirname+'/views/estilos'));
app.use(express.static(__dirname+'/images/books'));

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(empleadosRoute);
app.use(librosRoute);

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);

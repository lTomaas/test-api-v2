const express = require("express");
const app = express();
const empleadosRoute = require('./routes/empleados.js');
const {PORT} = require("./config.js")


//settings
app.use(express.static(__dirname+'/views'))
app.use(express.static(__dirname+'/views/estilos'));

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(empleadosRoute);

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);

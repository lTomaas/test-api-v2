const express = require("express");
const app = express();
const empleadosRoute = require('./routes/empleados.js');
const {PORT} = require("./config.js")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(empleadosRoute);

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);

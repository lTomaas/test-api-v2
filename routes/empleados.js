const { Router } = require("express");
var conexion = require("../db.js")

const router = Router();
const path = require('path');

/*
conexion.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos: ', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});
*/


//Prueba
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/empleados.html'));
})

router.get('/api/empleados', async (req, res) => {
    conexion.query('SELECT * FROM empleados', function (error, results, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al obtener los empleados' });
        } else {
            res.json(results);
        }
    });
});

router.get("/api/empleados/:id", async (req, res) =>{
    const idEmpleado = req.params.id;

    conexion.query(`SELECT * FROM empleados WHERE id = ${idEmpleado}`, function (error, result, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al obtener el empleado' });
        } else {
            res.json(result);
        }
    });
});

router.post("/api/empleados", async (req, res) => {
    const {nombre, salario } = req.body;

    conexion.query(`INSERT INTO empleados (nombre, salario) VALUES ("${nombre}",${salario})`, function (error, result, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al crear el empleado' });
        } else {
            res.json({
                message: 'Empleado creado con exito',
                body: {
                    empleado: {nombre, salario}
                }
            })
        }
    });
});


router.delete("/api/empleados/:id", async (req, res) =>{
    const id = req.params.id;

    conexion.query(`DELETE FROM empleados WHERE id = ${id}`, function (error, result, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al borrar el empleado' });
        } else {
            res.json('Empleado ' + id + ' eliminado con exito');
        }
    });
});


router.put("/api/empleados/:id", async (req, res) =>{
    const id = req.params.id;
    const {nombre, salario } = req.body;

    conexion.query(`UPDATE empleados \
                    SET nombre = "${nombre}", salario = ${salario} \
                    WHERE id = ${id}`,
                    function (error, result, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al actualizar el empleado' });
        } else {
            res.json('Empleado ' + id + ' actualizado con exito');
        }
    });
});


module.exports = router;


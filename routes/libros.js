const { Router } = require("express");
var conexion = require("../db.js")

const router = Router();
const path = require('path');


//Prueba
router.get('/libros', (req,res) => {
    res.sendFile(path.join(__dirname, '../views/libros.html'));
})

router.get('/api/libros', async (req, res) => {
    conexion.query('SELECT * FROM libros', function (error, results, fields) {
        if (error) {
            console.error('Error al ejecutar la consulta: ', error);
            res.status(500).json({ error: 'Error al obtener los libros' });
        } else {
            res.json(results);
        }
    });
});


module.exports = router;
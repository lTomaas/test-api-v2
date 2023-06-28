const {PORT} = require("./config.js")


fetch("http://localhost:${PORT}/api/empleados")
    .then(function (response) {
        return response.json();
    })

    
    .then(function (empleados) {
        let tabla = document.getElementById("tabla-empleados");
        let out = "";

        for (let book of books) {
            out += `
                <tr>
                    <td>${empleado.id} </td>
                    <td>${empleado.nombre} </td>
                    <td>${empleado.salario} </td>
                </tr>
                `
        }
        tabla.innerHTML = out;
    })
    .catch(function (error) {
        console.error('Error en la solicitud', error);
    });
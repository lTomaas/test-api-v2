
const dominio = `https://${window.location.host}/api/libros`


//document.write(dominio);

fetch(dominio)
    .then(function (response) {
        //document.write("fetch");
        return response.json();
    })


    .then(function (libros) {
       
        let tabla = document.getElementById("tabla-libros");
        let out = "";

        for (let libro of libros) {
            out += `
                <tr>
                    <td>${libro.isbn} </td>
                    <td>${libro.nombre} </td>
                    <td>${libro.autor} </td>
                    <td>${libro.precio} </td>
                </tr>
                `
            //document.write(out);
                //<td><img src="${libro.url_imagen}.jpg" alt="imagen" width = "100px"></td>
                //<td><img src="book-1.jpg" alt="imagen" width = "10px"></td>
        }
        tabla.innerHTML = out;
    })
    .catch(function (error) {
        console.error('Error en la solicitud', error);
    });
    
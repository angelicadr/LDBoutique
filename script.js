document.addEventListener('DOMContentLoaded', function() {
       // Simulación de los productos (puedes cargarlos desde localStorage o API también)
            class Producto {
              constructor(img, nombre, descripcion, precio) {
                this.img = img;
                this.nombre = nombre;
                this.descripcion = descripcion;
                this.precio = precio;
              }
            }

            const productos = [
              new Producto('../mipagina/img/27a1f014-f263-42a6-b797-f0688240251c.jpg', 'Intensamente Envidia', 'Pantalon y Camisa de la Emosion Envidia', '$70.000'),
              new Producto('../mipagina/img/319756bd-b6f5-404c-a14c-2642fb26e909.jpg', 'Igor','Pijama Satin short Camisa de Tiras', '$50.000'),
              new Producto('../mipagina/img/43326030-cb97-4e52-8740-dafd1bca2b7b.jpg', 'Intensamente Emosiones', 'Pijama Satin short Camisa', '$70.000'),
              new Producto('../mipagina/img/97acaf2e-0945-48b4-b60c-7b53b18a6ae1.jpg', 'Chimuelo', 'Pantalon y Camisa Chimuelo.', '$70.000'),
              new Producto('../mipagina/img/be73f38c-c4a9-4891-8901-2c078fb7b1bf.jpg', 'Gaticos', 'Pantalon y Camisa Gaticos', '$70.000'),
              new Producto('../mipagina/img/e54d7ef3-59de-4f4d-8171-c55761106b13.jpg', 'Satin Negro', 'Pijama Satin short Camisa', '$70.000'),
              new Producto('../mipagina/img/f1828fc7-15d8-4b3c-b6b0-41f8b8718a5a.jpg', 'Satin Dumbo', 'Pijama Satin short Camisa', '$70.000'),
              new Producto('../mipagina/img/fc6e439b-1b45-4c3c-823f-9f3d05bf4b01.jpg', 'Winnie Pooh', 'Pijama Satin short Camisa', '$70.000'),
              new Producto('../mipagina/img/44cb9184-ddf2-46e5-a2a8-17524af66b01.jpg', 'Satin Rosa', 'Pijama Satin short Camisa', '$70.000')
            ];

            // Obtener el parámetro ?producto=0
            const params = new URLSearchParams(window.location.search);
            const index = parseInt(params.get("producto"));
            
            if (!isNaN(index) && productos[index]) {
              const p = productos[index];
              document.getElementById("productoDetalle").innerHTML = `
                <h2 >${p.nombre}</h2>
                <img src="${p.img}" alt="${p.nombre}" width="200">
                <p>${p.descripcion}</p>
                <strong  id="precio">Precio: ${p.precio}</strong>
                <input type="hidden" id="productoselect" name="productoselect"  value="${p.nombre}">
                <input type="hidden" id="precio" name="precio" value="${p.precio}" >
              `;
            } else {
              document.getElementById("productoDetalle").innerText = "Producto no encontrado.";
            }
});



// Obtener el elemento donde se mostrarán el producto seleccionado para comprar
const listaDecantidades = document.getElementById('lista-de-Producto');

function productoSeleccionado(){
 // Obtener los valores del formulario
  const nombreInput = document.getElementById('nombre');
  const cantidadInput = document.getElementById('cantidad');
  const tallaInput = document.getElementById('talla');

  const nombre = nombreInput.value.trim();
  const cantidadTexto = cantidadInput.value.trim();
  const talla = tallaInput.options[tallaInput.selectedIndex].value;

  if (nombre !== '' && cantidadTexto !== '') {
    // Obtener el tbody de la tabla
    const tabla = document.getElementById('listaDecantidades');

    // Crear una nueva fila
    const fila = document.createElement('tr');

    // Crear celdas y asignarles el contenido
    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = nombre;

    const celdaCantidad = document.createElement('td');
    celdaCantidad.textContent = cantidadTexto;

    const celdaTalla = document.createElement('td');
    celdaTalla.textContent = talla;

      // ✅ Celda con botón eliminar
    const celdaAcciones = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.style.backgroundColor = '#e09bc5';
    botonEliminar.style.border = 'none';
    botonEliminar.style.padding = '6px 12px';
    botonEliminar.style.color = '#fff';
    botonEliminar.style.borderRadius = '6px';
    botonEliminar.style.cursor = 'pointer';

    // Acción al hacer clic: eliminar la fila
    botonEliminar.addEventListener('click', function () {
      fila.remove();
    });

    celdaAcciones.appendChild(botonEliminar);


    // Agregar celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaTalla);
    fila.appendChild(celdaAcciones);

    // Agregar la fila al cuerpo de la tabla
    tabla.appendChild(fila);

    // Limpiar el formulario
    nombreInput.value = '';
    cantidadInput.value = '';
    tallaInput.value = '';
  } else {
    swal('Por favor, ingresa tu nombre y cantidad.');
  }
}

//envio correo 
  document.getElementById('formularioContacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && correo && mensaje) {
      // Puedes hacer aquí un envío real si estás conectado a un backend
      swal('¡Mensaje enviado con éxito!');
      this.reset(); // Limpia el formulario
    } else {
      swal('Por favor completa todos los campos.');
    }
  });



  // 1. Obtener referencias a los elementos HTML que vamos a manipular.
const salesChartImg = document.getElementById('salesChart'); // La imagen del gráfico
const refreshButton = document.getElementById('refreshButton'); // El botón de "Actualizar"

function refreshChart() {
    console.log("Simulando actualización del gráfico...");

    const originalSrc = 'ventas_trimestrales.png';
    const timestamp = new Date().getTime(); // Obtiene una marca de tiempo actual
    salesChartImg.src = `${originalSrc}?v=${timestamp}`; // Añade el timestamp como parámetro de versión


    alert('Gráfico "actualizado" (la imagen se ha recargado).');
}

refreshButton.addEventListener('click', refreshChart);

console.log("Página de visualización de datos cargada. Lista para la interacción.");
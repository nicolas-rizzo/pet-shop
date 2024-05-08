import {PRODUCTOS} from "./constants/listaProductos.js"

/*-----------------------------------------------------*/

/*CARGAMOS 3 PROD. RANDOM*/
const cargarProductos =()=>{
    const listaProductos = document.getElementById('listaProductos');
    const numerosAleatorios = obtenerNumerosAleatorios(3, 1, 15);
    
    PRODUCTOS.forEach(producto => {
        if(numerosAleatorios.includes(producto.id)){
            let divProducto = document.createElement('div')
            let imagenProducto = document.createElement('img');
            let descripcionProducto = document.createElement('p');
            let precioProductos = document.createElement('p');
            let botonCarrito = document.createElement('button');

            divProducto.className="contenedorProducto"

            imagenProducto.src=producto.urlImagen;
            imagenProducto.loading="lazy";
            imagenProducto.className="imagenProducto"

            descripcionProducto.textContent=producto.descripcion;
            descripcionProducto.className="descripcionProducto"

            precioProductos.textContent=`${producto.precio}$`
            precioProductos.className="precioProducto"

            botonCarrito.textContent="Agregar al carrito";
            botonCarrito.value=producto.id;
            botonCarrito.className="botonCarrito";

            divProducto.appendChild(imagenProducto);
            divProducto.appendChild(descripcionProducto);
            divProducto.appendChild(precioProductos);
            divProducto.appendChild(botonCarrito);
            listaProductos.appendChild(divProducto)
        }
    })

    const botones = document.getElementsByClassName('botonCarrito');

    // Itera sobre cada botón y agrega el evento
    for (const element of botones) {
        const boton = element;
        boton.addEventListener('click', () => {
            agregarAlCarrito(boton.value);
        });
    }
}

const listaProductos = document.getElementById('listaProductos');

function obtenerNumerosAleatorios(cantidad, min, max) {
    const numerosAleatorios = new Set(); // Usamos un Set para evitar duplicados
    while (numerosAleatorios.size < cantidad) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosAleatorios.add(numeroAleatorio);
    }
    return Array.from(numerosAleatorios); // Convertimos el Set a un array
}

cargarProductos();
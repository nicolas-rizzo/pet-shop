import { calcularElTotal,mostrarProductosCarrito,agregarAlCarrito } from "./carrito.js";
import ApiData from "./apiData.js";

/*-----------------------------------------------------*/

/*CARGAMOS 3 PROD. RANDOM*/

const cargarProductos =async()=>{
    const listaProductos = document.getElementById('listaProductos');
    const PRODUCTOS = await ApiData.getProductosRandom();
    
    PRODUCTOS.forEach(producto => {
            let divProducto = document.createElement('div')
            let imagenProducto = document.createElement('img');
            let descripcionProducto = document.createElement('p');
            let precioProductos = document.createElement('p');
            let botonCarrito = document.createElement('button');

            divProducto.className="contenedorProducto"

            imagenProducto.src=producto.urlImagen_PR;
            imagenProducto.loading="lazy";
            imagenProducto.className="imagenProducto"

            descripcionProducto.textContent=producto.descripcion_PR;
            descripcionProducto.className="descripcionProducto"

            precioProductos.textContent=`$${producto.precioUnitario_PR}`
            precioProductos.className="precioProducto"

            botonCarrito.textContent="Agregar al carrito";
            botonCarrito.value=producto.idProducto_PR;
            botonCarrito.className="botonCarrito";

            divProducto.appendChild(imagenProducto);
            divProducto.appendChild(descripcionProducto);
            divProducto.appendChild(precioProductos);
            divProducto.appendChild(botonCarrito);
            listaProductos.appendChild(divProducto)
        
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

cargarProductos();

document.getElementById('shopNow').addEventListener('click', () => {
    location.href = './pages/productos.html';
});

document.getElementById('viewMore').addEventListener('click', () => {
    location.href = './pages/productos.html';
});

const iconoModal = document.getElementById("ModalIndex")
iconoModal.addEventListener('click',abrirModal)


/*ABRIR MODAL*/
function abrirModal() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML="";
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
    myModal.show();
    mostrarProductosCarrito();
    calcularElTotal()
}

const botonEliminarCarrito =document.getElementById('botonEliminarTodo');

botonEliminarCarrito.addEventListener('click',()=>{
    localStorage.clear();
    mostrarProductosCarrito();
    calcularElTotal();
})
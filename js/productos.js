import { PRODUCTOS } from "./constants/listaProductos.js"
import Productos from "./class/ClassProductos.js"
import { calcularElTotal,recuperarProductosCarrito,mostrarProductosCarrito } from "./modal.js";

const ANIMALES = ["Perro","Gato","Aves","Conejo","Tortuga"];

/*CARGAMOS AL SELECT TODOS LOS ANIMALES DEL ARRAY*/
const cargarListaAnimales =()=>{
    const listaAnimales = document.getElementById('animales');
    let animal = document.createElement('option');
    animal.textContent="Todos";
    animal.value="todos";
    listaAnimales.appendChild(animal);
    ANIMALES.forEach(anim => {
        let animal = document.createElement('option');
        animal.textContent = anim;
        animal.value=anim;
        listaAnimales.appendChild(animal)
    })
}

cargarListaAnimales();

/*-----------------------------------------------------*/

/*CARGAMOS TODOS LOS PRODUCTOS DEL OBJETO PRODUCTOS EN LA PAGINA*/
const cargarProductos =()=>{
    const listaProductos = document.getElementById('listaProductos');
    PRODUCTOS.forEach(producto => {
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

        precioProductos.textContent=`$${producto.precio}`
        precioProductos.className="precioProducto"

        botonCarrito.textContent="Agregar al carrito";
        botonCarrito.value=producto.id;
        botonCarrito.className="botonCarrito";

        divProducto.appendChild(imagenProducto);
        divProducto.appendChild(descripcionProducto);
        divProducto.appendChild(precioProductos);
        divProducto.appendChild(botonCarrito);
        listaProductos.appendChild(divProducto)
    })

    const botones = document.getElementsByClassName('botonCarrito');

    // Itera sobre cada botón y agrega el evento
    for (let i = 0; i < botones.length; i++) {
        const boton = botones[i];
        boton.addEventListener('click', () => {
            agregarAlCarrito(boton.value);
        });
    }
}

cargarProductos();

/*-----------------------------------------------------*/

/*ACA VAMOS A FILTRAR LOS PRODUCTOS DEPENDIENDO EL ANIMAL */

const listaAnimales = document.getElementById('animales');
const listaProductos = document.getElementById('listaProductos');

listaAnimales.addEventListener('change',()=>{
    listaProductos.innerHTML='';
    let animalElegido = listaAnimales.value;

    if(animalElegido==="todos"){
        cargarProductos();
        return;
    }

    PRODUCTOS.forEach(producto => {
        if(producto.animal===animalElegido){
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

            precioProductos.textContent=`$${producto.precio}`
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
    for (let i = 0; i < botones.length; i++) {
        const boton = botones[i];
        boton.addEventListener('click', () => {
            agregarAlCarrito(boton.value);
        });
    }
})

/*----------------------------*/

/*ACA VAMOS A HACER QUE LOS PRODUCTOS SELECCIONADOS VALLAN AL CARRITO */

let prodCarrito = [];

/*VERIFICO QUE EL PRODUCTO ELEGIDO NO ESTE REPETIDO*/
const verificarRepetido=(id)=>{
    const arrayProductos = recuperarProductosCarrito();
    let siHay=false;
    arrayProductos.forEach(objProducto =>{
        if(objProducto.id==id){
            //console.log(objProducto.id)
            siHay=true;
        }
    })
    return siHay ? true : false;
}
/*GUARDO EN LOCAL LOS PRODUCTOS ELEGIDOS*/
const agregarAlCarrito=(id)=>{
    PRODUCTOS.forEach(producto => {
        if(producto.id==id){
                const productosCarritoJSON = localStorage.getItem('productosCarrito');
                if (productosCarritoJSON == null) {
                        const prodElegido = new Productos(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                        prodCarrito.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(prodCarrito))
                }
                else{
                    if(verificarRepetido(producto.id)==false){
                        const arrayProductos = recuperarProductosCarrito();
                        const prodElegido = new Productos(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                        arrayProductos.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(arrayProductos))
                    }
                }
        }
    });
}

/*-------------------------*/

/*ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO*/

const botonEliminarCarrito =document.getElementById('botonEliminarTodo');

botonEliminarCarrito.addEventListener('click',()=>{
    localStorage.clear();
    prodCarrito=[];
    mostrarProductosCarrito();
    calcularElTotal();
})

/*------------------------*/
const iconoModal = document.getElementById("btnModal")
iconoModal.addEventListener('click',abrirModal)

/*ABRIR MODAL*/
function abrirModal() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML="";
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
    myModal.show();
    mostrarProductosCarrito();
    calcularElTotal();
}

import Productos from "./class/ClassProductos.js"
import { calcularElTotal,recuperarProductosCarrito,mostrarProductosCarrito } from "./modal.js";

/* TRAEMOS TODOS LOS ANIMALES DESDE EL BACKEND */
const getTodosLosAnimales= async ()=>{
    const res = await fetch("http://localhost:8008/animales");
    const data = await res.json();
    return data;
}

/*CARGAMOS AL SELECT TODOS LOS ANIMALES DEL ARRAY*/
const cargarListaAnimales = async()=>{
    const ANIMALES = await getTodosLosAnimales();
    const listaAnimales = document.getElementById('animales');
    let animal = document.createElement('option');
    animal.textContent="Todos";
    animal.value=0;
    listaAnimales.appendChild(animal);
    ANIMALES.forEach(anim => {
        let animal = document.createElement('option');
        animal.textContent = anim.nombre_AN;
        animal.value=anim.idAnimal_AN;
        listaAnimales.appendChild(animal)
    })
}

cargarListaAnimales();

/*-----------------------------------------------------*/

/* TRAEMOS TODOS LOS PRODUCTOS DESDE EL BACKEND */

const getTodosLosProductos=async()=>{
    const res = await fetch("http://localhost:8008/productos")
    const data = await res.json();
    return data;
}
const getProductosPorAnimal=async(idAnimal)=>{
    const res = await fetch(`http://localhost:8008/productos/${idAnimal}`)
    const data = await res.json();
    return data;
}

/*CARGAMOS TODOS LOS PRODUCTOS DEL OBJETO PRODUCTOS EN LA PAGINA*/
const cargarProductos = async ()=>{
    const PRODUCTOS = await getTodosLosProductos();
    const listaProductos = document.getElementById('listaProductos');
    PRODUCTOS.forEach(producto => {
        if(producto.activo_PR==1){
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
}

cargarProductos();

/*-----------------------------------------------------*/

/*ACA VAMOS A FILTRAR LOS PRODUCTOS DEPENDIENDO EL ANIMAL */

const listaAnimales = document.getElementById('animales');
const listaProductos = document.getElementById('listaProductos');

listaAnimales.addEventListener('change',async ()=>{
    listaProductos.innerHTML='';
    let animalElegido = listaAnimales.value;

    if(animalElegido==0){
        cargarProductos();
        return;
    }

    const PRODUCTOS = await getProductosPorAnimal(animalElegido);
    PRODUCTOS.forEach(producto => {
        if(producto.idProducto_PR==animalElegido){
            if(producto.activo_PR==1){
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
            }
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
const agregarAlCarrito=async(id)=>{
    const PRODUCTOS = await getTodosLosProductos();
    PRODUCTOS.forEach(producto => {
        if(producto.idProducto_PR==id){
                const productosCarritoJSON = localStorage.getItem('productosCarrito');
                if (productosCarritoJSON == null) {
                        const prodElegido = new Productos(producto.idProducto_PR,producto.urlImagen_PR,producto.descripcion_PR,producto.precioUnitario_PR);
                        prodCarrito.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(prodCarrito))
                }
                else{
                    if(verificarRepetido(producto.idProducto_PR)==false){
                        const arrayProductos = recuperarProductosCarrito();
                        const prodElegido = new Productos(producto.idProducto_PR,producto.urlImagen_PR,producto.descripcion_PR,producto.precioUnitario_PR);
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

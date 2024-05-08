import {PRODUCTOS} from "./constants/listaProductos.js"
import ProductosCarrito from "./class/productosCarrito.js"

const ANIMALES = ["Perro","Gato","Aves","Conejo","Tortuga"];

/*CARGAMOS AL SELECT TODOS LOS ANIMALES DEL ARRAY*/
const cargarListaAnimales =()=>{
    const listaAnimales = document.getElementById('animales');
    let animal = document.createElement('option');
    animal.textContent="Todos los animales";
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
    
})

/*----------------------------*/

/*ACA VAMOS A HACER QUE LOS PRODUCTOS SELECCIONADOS VALLAN AL CARRITO */

const prodCarrito = [];

const verificarRepetido=(id)=>{
    const arrayProductos = JSON.parse(localStorage.getItem('productosCarrito'));
    let siHay=false;
    arrayProductos.forEach(objProducto =>{
        if(objProducto.id==id){
            console.log(objProducto.id)
            siHay=true;
        }
    })
    if(siHay){
        return true;
    }
    else{
        return false;
    }
}

const agregarAlCarrito=(id)=>{
    PRODUCTOS.forEach(producto => {
        if(producto.id==id){
                const productosCarritoJSON = localStorage.getItem('productosCarrito');
                if (productosCarritoJSON == null) {
                    const prodElegido = new ProductosCarrito(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                    prodCarrito.push(prodElegido);
                    localStorage.setItem('productosCarrito',JSON.stringify(prodCarrito))
                }
                else{
                    if(verificarRepetido(producto.id)==false){
                        const arrayProductos = JSON.parse(localStorage.getItem('productosCarrito'));
                        const prodElegido = new ProductosCarrito(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                        arrayProductos.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(arrayProductos))
                    }
                }
        }
    });

    /*INCREMENTAR O DECREMENTAR EL CONTADOR DEL CARRITO*/
/*
    const botonesSuma = document.getElementsByClassName('suma');
    const botonesResta = document.getElementsByClassName('menos');
    const contadores = document.getElementsByClassName('contador');

    for (let i = 0; i < botonesSuma.length; i++) {
        const botonS = botonesSuma[i];
        const botonR= botonesResta[i];
        */

        /*SUMA*/
       /* botonS.addEventListener('click', () => {
            for (let x = 0; x < contadores.length; x++){
                const contador = contadores[x];
                if(botonS.id===contador.id){
                    let valor = parseInt(contador.textContent) + 1;
                    contador.textContent=valor;
                    calcularElTotal();
                }
            }
        });*/

        /*RESTA*/
        /*botonR.addEventListener('click', () => {
            for (let j = 0; j < contadores.length; j++){
                const contador = contadores[j];
                if(botonR.id===contador.id){
                    let valor = parseInt(contador.textContent) -1;
                    if(valor>0){
                        contador.textContent=valor;
                        calcularElTotal();
                    } 
                }
            }
        });
    }*/

}
/*-------------------------*/

/*ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO*/

const botonEliminarCarrito =document.getElementById('botonEliminarTodo');

botonEliminarCarrito.addEventListener('click',()=>{
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = "";
    calcularElTotal();
})

/*------------------------*/

/*ABRIR MODAL*/
function abrirModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
    myModal.show();

    calcularElTotal();
}

const calcularElTotal=()=>{
    /*MOSTRAR EL PRECIO TOTAL*/
    const preciosCarritos = document.getElementsByClassName('precioCarrito');
    const contadores = document.getElementsByClassName('contador');
    const PrecioTotalCarrito = document.getElementById('precioTotalCarrito');
    let precioTotal = 0;

    for (let i = 0; i < preciosCarritos.length; i++){
        const precio = preciosCarritos[i];
        const valor = parseInt(precio.textContent.split('$').join(''));
        
        for (let z = 0; z < contadores.length; z++){
            const cont = contadores[z];

            if(precio.value===cont.value){
                precioTotal+=valor*parseInt(cont.textContent)
            }
        }
    }

    PrecioTotalCarrito.textContent=`${precioTotal}$`;
}


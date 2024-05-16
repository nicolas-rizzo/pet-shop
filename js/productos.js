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

/*RECUPERO EL ARRAY DE OBJETOS GUARDADO EN LOCAL*/
const recuperarProductosCarrito =()=>{
    const arrayProductos = JSON.parse(localStorage.getItem('productosCarrito'));
    return arrayProductos;
}
/*VERIFICO QUE EL PRODUCTO ELEGIDO NO ESTE REPETIDO*/
const verificarRepetido=(id)=>{
    const arrayProductos = recuperarProductosCarrito();
    let siHay=false;
    arrayProductos.forEach(objProducto =>{
        if(objProducto.id==id){
            console.log(objProducto.id)
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
                        const prodElegido = new ProductosCarrito(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                        prodCarrito.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(prodCarrito))
                }
                else{
                    if(verificarRepetido(producto.id)==false){
                        const arrayProductos = recuperarProductosCarrito();
                        const prodElegido = new ProductosCarrito(producto.id,producto.urlImagen,producto.descripcion,producto.precio);
                        arrayProductos.push(prodElegido);
                        localStorage.setItem('productosCarrito',JSON.stringify(arrayProductos))
                    }
                }
        }
    });

}
/*-------------------------*/

const mostrarProductosCarrito=()=>{
    const prodEnElCarrito = recuperarProductosCarrito();
    if(prodEnElCarrito==null){
        const listaCarrito = document.getElementById('listaCarrito');
        listaCarrito.innerHTML="";
        return;
    }
    prodEnElCarrito.forEach(objCarrito =>{
        /*CREANDO LOS DIVS DEL ITEM CARRITO*/
        const listaCarrito = document.getElementById('listaCarrito');
        let divCarritoProducto = document.createElement('div');
        divCarritoProducto.className="itemProductoCarrito";
        let divDescripcion = document.createElement('div');
        divDescripcion.className="infoProducCarrito"
        let divTextoDescripcion = document.createElement('div');
        divTextoDescripcion.className="textoDescripcion"
        let divInteraccion = document.createElement('div');
        divInteraccion.className="divInteraccion"

        /*CREANDO LA IMAGEN DEL PRODUCTO SELECCIONADO*/
        let imgProdCarrito = document.createElement('img');
        imgProdCarrito.src=objCarrito.urlImagen;
        imgProdCarrito.loading="lazy";
        imgProdCarrito.className="imgProdCarrito"

        /*CREANDO LA DESCRIPCION DEL PRODUCTO SELECCIONADO*/
        let descProdCarrito = document.createElement('p')
        descProdCarrito.textContent=objCarrito.descripcion;
        descProdCarrito.className="descripcionCarrito";

        /*CREANDO EL PRECIO DEL PRODUCTO SELECCIONADO*/
        let precioProdCarrito = document.createElement('p');
        precioProdCarrito.textContent=`${objCarrito.precio}$`
        precioProdCarrito.className="precioCarrito";
        precioProdCarrito.id=objCarrito.id;
        
        /*CREANDO LOS ICONOS*/
        let iconoMas = document.createElement('i')
        iconoMas.className="bi bi-plus icono suma";
        iconoMas.id=objCarrito.id;
        let contador = document.createElement('p')
        contador.textContent=1;
        contador.className="contador";
        contador.id=objCarrito.id;
        let iconoMenos = document.createElement('i')
        iconoMenos.className="bi bi-dash icono menos";
        iconoMenos.id=objCarrito.id;
        let iconoBasura = document.createElement('i')
        iconoBasura.className="bi bi-trash3-fill icono basura";
        iconoBasura.id=objCarrito.id;

        /*AGREANDO EL CONTENIDO A LOS DIVS*/
        divTextoDescripcion.appendChild(descProdCarrito);
        divTextoDescripcion.appendChild(precioProdCarrito)
        divDescripcion.appendChild(imgProdCarrito);
        divDescripcion.appendChild(divTextoDescripcion);
        divCarritoProducto.appendChild(divDescripcion);
        divInteraccion.appendChild(iconoMas);
        divInteraccion.appendChild(contador);
        divInteraccion.appendChild(iconoMenos);
        divInteraccion.appendChild(iconoBasura);
        divCarritoProducto.appendChild(divInteraccion);
        listaCarrito.appendChild(divCarritoProducto);
    })

    
    /*INCREMENTAR O DECREMENTAR EL CONTADOR DEL CARRITO*/

    const botonesSuma = document.getElementsByClassName('suma');
    const botonesResta = document.getElementsByClassName('menos');
    const contadores = document.getElementsByClassName('contador');

    for (let i = 0; i < botonesSuma.length; i++) {
        const botonS = botonesSuma[i];
        const botonR= botonesResta[i];

        /*SUMA*/
        botonS.addEventListener('click', () => {
            for (let x = 0; x < contadores.length; x++){
                const contador = contadores[x];
                if(botonS.id===contador.id){
                    let valor = parseInt(contador.textContent) + 1;
                    contador.textContent=valor;
                    calcularElTotal();
                }
            }
        });

        /*RESTA*/
        botonR.addEventListener('click', () => {
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
    }
}


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

const calcularElTotal=()=>{
    /*MOSTRAR EL PRECIO TOTAL*/
    const preciosCarritos = document.getElementsByClassName('precioCarrito');
    const contadores = document.getElementsByClassName('contador');
    const PrecioTotalCarrito = document.getElementById('precioTotalCarrito');
    let precioTotal = 0;
    
    for (let i = 0; i < preciosCarritos.length; i++){
        const precio = preciosCarritos[i];
        const valor = parseInt(precio.textContent.split('$').join(''));
        const cont = contadores[i];
        if(precio.id===cont.id){
            precioTotal+=valor*parseInt(cont.textContent)
        }
    }

    PrecioTotalCarrito.textContent=`${precioTotal}$`;
}


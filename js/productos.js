import { calcularElTotal,mostrarProductosCarrito,agregarAlCarrito } from "./carrito.js";
import ApiData from "./apiData.js";

/*CARGAMOS AL SELECT TODOS LOS ANIMALES DEL ARRAY*/
const cargarListaAnimales = async()=>{
    const ANIMALES = await ApiData.getTodosLosAnimales();
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

/*CARGAMOS TODOS LOS PRODUCTOS DEL OBJETO PRODUCTOS EN LA PAGINA*/
const cargarProductos = async ()=>{
    let datosUsuario = null;
        
    try {
        datosUsuario = await ApiData.obtenerUsuario();
    } catch (err) {
        console.log("Usuario no logueado");
    }

    const PRODUCTOS = await ApiData.getTodosLosProductos();
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

            if(datosUsuario && datosUsuario.admin==1){
                let iconoEditar = document.createElement('i');
                let iconoBorrar = document.createElement('i');
                let divAdmin = document.createElement('div')
                divAdmin.className='divAdmin'
                iconoEditar.className='bi bi-pencil editar';
                iconoEditar.id=producto.idProducto_PR;
                iconoBorrar.className='bi bi-trash borrar'
                iconoBorrar.id=producto.idProducto_PR;
                divAdmin.appendChild(iconoEditar);
                divAdmin.appendChild(iconoBorrar);
                divProducto.appendChild(divAdmin);
            }
    
            listaProductos.appendChild(divProducto)
        }
    })

    const iconosBorrar = document.getElementsByClassName('borrar')
    const iconosEditar = document.getElementsByClassName('editar')
    
    /*BOTON BORRAR*/
    for(let i=0 ;i<iconosBorrar.length;i++){
        const iconoB = iconosBorrar[i];
        iconoB.addEventListener('click',()=>{
            mostrarModalEliminar(iconoB.id)
        })
    }

    /*BOTON EDITAR*/
    for(let i=0 ;i<iconosEditar.length;i++){
        const iconoE = iconosEditar[i];
        iconoE.addEventListener('click',()=>{
            mostrarModalEditar(iconoE.id)
        })
    }

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
    let datosUsuario = null;
        
    try {
        datosUsuario = await ApiData.obtenerUsuario();
    } catch (err) {
        console.log("Usuario no logueado");
    }

    listaProductos.innerHTML='';
    let animalElegido = listaAnimales.value;

    if(animalElegido==0){
        cargarProductos();
        return;
    }

    const PRODUCTOS = await ApiData.getProductosPorAnimal(animalElegido);
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

                if(datosUsuario && datosUsuario.admin==1){
                    let iconoEditar = document.createElement('i');
                    let iconoBorrar = document.createElement('i');
                    let divAdmin = document.createElement('div')
                    divAdmin.className='divAdmin'
                    iconoEditar.className='bi bi-pencil editar';
                    iconoEditar.id=producto.idProducto_PR;
                    iconoBorrar.className='bi bi-trash borrar'
                    iconoBorrar.id=producto.idProducto_PR;
                    divAdmin.appendChild(iconoEditar);
                    divAdmin.appendChild(iconoBorrar);
                    divProducto.appendChild(divAdmin);
                }

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

const mostrarModalEliminar=async(id)=>{
    var myModal = new bootstrap.Modal(document.getElementById('modalBorrar'), {});
    const modalEliminarBody = document.getElementById('modalEliminarBody');
    const modalFooterBorrar = document.getElementById('modalFooterBorrar')
    const botonBorrar = document.createElement('button');
    const imgProd = document.createElement('img');
    const descProd = document.createElement('p');
    const dataProducto = await ApiData.getProductoPorId(id);
    
    modalFooterBorrar.innerHTML='';
    modalEliminarBody.innerHTML='';
    
    imgProd.src=dataProducto.urlImagen_PR;
    descProd.textContent=dataProducto.descripcion_PR;
    
    modalEliminarBody.append(imgProd);
    modalEliminarBody.append(descProd);

    //<button type="button" class="btn btn-danger">Eliminar</button>
    botonBorrar.type="button";
    botonBorrar.className="btn btn-danger";
    botonBorrar.id=id;
    botonBorrar.textContent="Eliminar"

    botonBorrar.addEventListener('click',async()=>{
        const divMensajeBorrar = document.getElementById("divMensajeBorrar");
        const data = await ApiData.eliminarProducto(botonBorrar.id);
        const mensajeBorrado = document.createElement('p');

        mensajeBorrado.textContent=data.message;
        divMensajeBorrar.append(mensajeBorrado)
        setTimeout(() => {
            window.location.reload();
        }, 1200);
    })

    modalFooterBorrar.append(botonBorrar)

    myModal.show();
}

const mostrarModalEditar=async(id)=>{
    var myModal = new bootstrap.Modal(document.getElementById('modalEditar'), {});
    const divIdInput = document.getElementById('divInputId');
    const inputID = document.createElement('input');
    const producto = await ApiData.getProductoPorId(id);

    inputID.value=producto.idProducto_PR;
    inputID.id="inputID";
    inputID.type="hidden";

    divIdInput.innerHTML='';
    divIdInput.append(inputID);
    

    const inputPrecio = document.getElementById('precioEditar');
    const inputUrlImagen = document.getElementById('urlImagenEditar');
    const inputDescripcion = document.getElementById('descripcionEditar');

    inputPrecio.value=producto.precioUnitario_PR;
    inputDescripcion.value=producto.descripcion_PR;
    inputUrlImagen.value=producto.urlImagen_PR;

    myModal.show();
}

const form = document.getElementById('formEditarProd');

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    
    const inputPrecio = document.getElementById('precioEditar');
    const inputUrlImagen = document.getElementById('urlImagenEditar');
    const inputDescripcion = document.getElementById('descripcionEditar');
    const inputID = document.getElementById('inputID')

    const mensajeEditar = document.getElementById('mensajeEditar');

    const data = await ApiData.editarProducto(inputID.value,inputUrlImagen.value,inputDescripcion.value,inputPrecio.value);

    if(data.message){
        mensajeEditar.textContent=data.message;
        setTimeout(() => {
            window.location.reload();
        }, 1200);
    }
})
import ApiData from "./apiData.js";
import Productos from "./class/ClassProductos.js";

export const recuperarProductosCarrito =()=>{
    const arrayProductos = JSON.parse(localStorage.getItem('productosCarrito'));
    return arrayProductos;
}

export const mostrarProductosCarrito=()=>{
    const prodEnElCarrito = recuperarProductosCarrito();

    if (document.getElementById('botonEliminarTodo')) 
        document.getElementById('botonEliminarTodo').disabled = false;

    if(prodEnElCarrito==null || prodEnElCarrito.length === 0) {
        const listaCarrito = document.getElementById('listaCarrito');
        listaCarrito.innerHTML="<b>Su carrito esta vacío</b>";
        if (document.getElementById('botonEliminarTodo')) 
            document.getElementById('botonEliminarTodo').disabled = true;
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
        precioProdCarrito.textContent=`$ ${objCarrito.precio}`
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
    const btnBorrar = document.getElementsByClassName('basura');

    for (let i = 0; i < botonesSuma.length; i++) {
        const botonS = botonesSuma[i];
        const botonR= botonesResta[i];
        const borrar = btnBorrar[i];

        borrar.addEventListener('click',()=>{
            let arrayProd = recuperarProductosCarrito();
            let indice;
            for(let i=0 ; i<arrayProd.length;i++){
                if(arrayProd[i].id==borrar.id){
                    indice=i;
                }
            }
            arrayProd.splice(indice,1);
            localStorage.setItem('productosCarrito',JSON.stringify(arrayProd))
            const listaCarrito = document.getElementById('listaCarrito');
            listaCarrito.innerHTML="<b>Su carrito esta vacío</b>";
            mostrarProductosCarrito()
            calcularElTotal();
        });

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
                    } else {
                        const listaCarrito = document.getElementById('listaCarrito');
                        listaCarrito.innerHTML="<b>Su carrito esta vacío</b>";
                        if (document.getElementById('botonEliminarTodo')) 
                            document.getElementById('botonEliminarTodo').disabled = true;
                    }
                }
            }
        });
    }
}

export const calcularElTotal=()=>{
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

    PrecioTotalCarrito.textContent=`$ ${precioTotal}`;
}

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
export const agregarAlCarrito=async(id)=>{
    const PRODUCTOS = await ApiData.getProductoPorId(id);
    PRODUCTOS.forEach(producto => {
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
    });
}
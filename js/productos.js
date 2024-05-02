const PRODUCTOS = [
    {
        id:1,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    },
    {
        id:2,
        animal:"Gato",
        urlImagen:"https://www.paraisodemascotas.com.ar/wp-content/uploads/2019/05/gati-carno-paraiso-de-mascotas-parana-super-mascota.webp",
        descripcion:"Gati Adultos sabor carne y pollo a la jardinera y otras proteinas",
        precio:20000
    },
    {
        id:3,
        animal:"Aves",
        urlImagen:"https://catycanar.vtexassets.com/arquivos/ids/156453/10671.jpg?v=637732970377270000",
        descripcion:"Alimento Para Canarios Tropmix Zootec X 1 Kg",
        precio:10000
    },
    {
        id:4,
        animal:"Conejo",
        urlImagen:"https://sc7.scart.cl:8080/images/11acc07c-ecc2-4770-af10-a32f44569780.png",
        descripcion:"SCART Producto Alimento para conejos | Champion Mini Pets",
        precio:9000
    },
    {
        id:5,
        animal:"Tortuga",
        urlImagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/dcdb2ebe-d6ae-4bcd-8ee3-711ce7799406.aff2f83251b55cd062271dc76495b859.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion:"Alimento para Tortugas Acuaticas Lomas Reptile Sticks Palitos 300 gr",
        precio:15000
    },
    {
        id:6,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    },
    {
        id:7,
        animal:"Gato",
        urlImagen:"https://www.paraisodemascotas.com.ar/wp-content/uploads/2019/05/gati-carno-paraiso-de-mascotas-parana-super-mascota.webp",
        descripcion:"Gati Adultos sabor carne y pollo a la jardinera y otras proteinas",
        precio:20000
    },
    {
        id:8,
        animal:"Aves",
        urlImagen:"https://catycanar.vtexassets.com/arquivos/ids/156453/10671.jpg?v=637732970377270000",
        descripcion:"Alimento Para Canarios Tropmix Zootec X 1 Kg",
        precio:10000
    },
    {
        id:9,
        animal:"Conejo",
        urlImagen:"https://sc7.scart.cl:8080/images/11acc07c-ecc2-4770-af10-a32f44569780.png",
        descripcion:"SCART Producto Alimento para conejos | Champion Mini Pets",
        precio:9000
    },
    {
        id:10,
        animal:"Tortuga",
        urlImagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/dcdb2ebe-d6ae-4bcd-8ee3-711ce7799406.aff2f83251b55cd062271dc76495b859.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion:"Alimento para Tortugas Acuaticas Lomas Reptile Sticks Palitos 300 gr",
        precio:15000
    },
    {
        id:11,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    },
    {
        id:12,
        animal:"Gato",
        urlImagen:"https://www.paraisodemascotas.com.ar/wp-content/uploads/2019/05/gati-carno-paraiso-de-mascotas-parana-super-mascota.webp",
        descripcion:"Gati Adultos sabor carne y pollo a la jardinera y otras proteinas",
        precio:20000
    },
    {
        id:13,
        animal:"Aves",
        urlImagen:"https://catycanar.vtexassets.com/arquivos/ids/156453/10671.jpg?v=637732970377270000",
        descripcion:"Alimento Para Canarios Tropmix Zootec X 1 Kg",
        precio:10000
    },
    {
        id:14,
        animal:"Conejo",
        urlImagen:"https://sc7.scart.cl:8080/images/11acc07c-ecc2-4770-af10-a32f44569780.png",
        descripcion:"SCART Producto Alimento para conejos | Champion Mini Pets",
        precio:9000
    },
    {
        id:15,
        animal:"Tortuga",
        urlImagen:"https://i5.walmartimages.com.mx/mg/gm/3pp/asr/dcdb2ebe-d6ae-4bcd-8ee3-711ce7799406.aff2f83251b55cd062271dc76495b859.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        descripcion:"Alimento para Tortugas Acuaticas Lomas Reptile Sticks Palitos 300 gr",
        precio:15000
    }
];

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

const agregarAlCarrito=(id)=>{
    PRODUCTOS.forEach(producto => {
        if(producto.id==id){
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
            imgProdCarrito.src=producto.urlImagen;
            imgProdCarrito.loading="lazy";
            imgProdCarrito.className="imgProdCarrito"

            /*CREANDO LA DESCRIPCION DEL PRODUCTO SELECCIONADO*/
            let descProdCarrito = document.createElement('p')
            descProdCarrito.textContent=producto.descripcion;
            descProdCarrito.className="descripcionCarrito";

            /*CREANDO EL PRECIO DEL PRODUCTO SELECCIONADO*/
            let precioProdCarrito = document.createElement('p');
            precioProdCarrito.textContent=`${producto.precio}$`
            precioProdCarrito.className="precioCarrito";
            precioProdCarrito.value=producto.id;
            
            /*CREANDO LOS ICONOS*/
            let iconoMas = document.createElement('i')
            iconoMas.className="bi bi-plus icono suma";
            iconoMas.id=producto.id;
            let contador = document.createElement('p')
            contador.textContent=1;
            contador.className="contador";
            contador.id=producto.id;
            let iconoMenos = document.createElement('i')
            iconoMenos.className="bi bi-dash icono menos";
            iconoMenos.id=producto.id;
            let iconoBasura = document.createElement('i')
            iconoBasura.className="bi bi-trash3-fill icono basura";

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
        }
    });

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


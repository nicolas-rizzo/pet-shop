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
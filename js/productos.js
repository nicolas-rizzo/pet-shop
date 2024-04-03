const productos = [
    {
        id:1,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    },
    {
        id:2,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    },
    {
        id:3,
        animal:"Perro",
        urlImagen:"https://d28hi93gr697ol.cloudfront.net/071e89ac-46a5-8ab3/img/Producto/0163acc7-daea-b9d4-6f76-b3918b2e4fd3/Alimento-Pro-Plan-Puppy-Raza-Mediana-18kg-63212d8a92d92.webp",
        descripcion:"Alimento para perro Pro Plan Puppy Razas Medianas 15 Kg + 3 Kg de Regalo",
        precio:15000
    }
];

const animales = ["Perro","Gato","Aves","Conejo","Tortuga"];

const cargarListaAnimales =()=>{
    const listaAnimales = document.getElementById('animales');
    let animal = document.createElement('option');
    animal.textContent="Seleccione un animal";
    animal.value="todos";
    listaAnimales.appendChild(animal);
    animales.forEach(anim => {
        let animal = document.createElement('option');
        animal.textContent = anim;
        animal.value=anim;
        listaAnimales.appendChild(animal)
    })
}


cargarListaAnimales();
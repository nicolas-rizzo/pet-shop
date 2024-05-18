const listaR = document.getElementById('listaResponsive');
const links = document.getElementById('links');

listaR.addEventListener('click',()=>{
    links.classList.toggle('mostrarLista');
	listaR.classList.toggle('rotarLista');
})
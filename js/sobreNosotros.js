import { calcularElTotal,recuperarProductosCarrito,mostrarProductosCarrito } from "./modal.js";

const iconoModal = document.getElementById("btnModal")
iconoModal.addEventListener('click',abrirModal)

/*ABRIR MODAL*/
function abrirModal() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML="";
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {});
    myModal.show();
    mostrarProductosCarrito();
    calcularElTotal()
}

const botonEliminarCarrito =document.getElementById('botonEliminarTodo');

botonEliminarCarrito.addEventListener('click',()=>{
    localStorage.clear();
    mostrarProductosCarrito();
    calcularElTotal();
})
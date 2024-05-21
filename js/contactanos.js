
import { calcularElTotal,recuperarProductosCarrito,mostrarProductosCarrito } from "./modal.js";


function validateForm() {
    let form = document.getElementById('contactForm');
    let inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    for (let input of inputs) {
        if (!input.value) {
            alert(`Por favor, complete el campo ${input.previousElementSibling.innerText}`);
            input.focus();
            return false;
        }
    }

    let genderSelected = form.querySelectorAll('input[name="gender"]:checked');
    if (genderSelected.length === 0) {
        alert('Por favor, seleccione un género.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const myButton = document.getElementById('enviar');
    myButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        alert('Mensaje enviado con exito!');
        window.location.href = 'contactanos.html';
    });
});


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

import { calcularElTotal,recuperarProductosCarrito,mostrarProductosCarrito } from "./carrito.js";

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

function validateEmail(email) {
    // Simple email validation regex
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let esValido = true;

        const nombre = document.getElementById('name');
        const errorNombre = document.getElementById('error-nombre');
        if (!nombre.value.trim()) {
            esValido = false;
            nombre.classList.add('error');
            errorNombre.style.display = 'inline';
        } else {
            nombre.classList.remove('error');
            errorNombre.style.display = 'none';
        }

        const email = document.getElementById('email');
        const errorEmail = document.getElementById('error-email');
        if (!email.value.trim()) {
            esValido = false;
            email.classList.add('error');
            errorEmail.style.display = 'inline';
        } else {
            email.classList.remove('error');
            errorEmail.style.display = 'none';
        }

        const phone = document.getElementById('phone');
        const errorPhone = document.getElementById('error-phone');
        if (!phone.value.trim()) {
            esValido = false;
            phone.classList.add('error');
            errorPhone.style.display = 'inline';
        } else {
            phone.classList.remove('error');
            errorPhone.style.display = 'none';
        }

        const mensaje = document.getElementById('message');
        const errorMensaje = document.getElementById('error-mensaje');
        if (!mensaje.value.trim()) {
            esValido = false;
            mensaje.classList.add('error');
            errorMensaje.style.display = 'inline';
        } else {
            mensaje.classList.remove('error');
            errorMensaje.style.display = 'none';
        }

        const contactMethod = document.getElementById('contactMethod');
        const errorContactMethod = document.getElementById('error-contact');
        if (!contactMethod.value.trim()) {
            esValido = false;
            contactMethod.classList.add('error');
            errorContactMethod.style.display = 'inline';
        } else {
            contactMethod.classList.remove('error');
            errorContactMethod.style.display = 'none';
        }

        const radios = document.querySelectorAll('input[name="gender"]:checked');
        const errorGenero = document.getElementById('error-genero');
        if (radios.length === 0) {
            esValido = false;
            //radios.classList.add('error');
            errorGenero.style.display = 'inline';
        } else {
            //radios.classList.add('error');
            errorGenero.style.display = 'none';
        }

        if (esValido) {
            alert('Mensaje enviado con exito!')
            form.submit();
        }
    });
});

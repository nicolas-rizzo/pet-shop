import ApiData from "./apiData.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formAnimal');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        let esValido = true;

        const validarCampoTexto = (campo, errorMsgId) => {
            const errorMensaje = document.getElementById(errorMsgId);
            if (!campo.value.trim()) {
                esValido = false;
                campo.classList.add('error');
                errorMensaje.style.display = 'inline';
            } else {
                campo.classList.remove('error');
                errorMensaje.style.display = 'none';
            }
        };

        validarCampoTexto(document.getElementById('nombres'), 'error-nombres');

        if (esValido) {
            const nombres = document.getElementById('nombres').value;

            try {
                const response = await ApiData.registrarAnimal(nombres);
                document.getElementById('formAnimal').reset()
                mostrarAlerta('Tipo de animal registrado.', 'success')
            } catch (error) {
                mostrarAlerta('Error al registrar el tipo de animal. Reintente mas tarde.', 'danger')
            }
        }
    });
});

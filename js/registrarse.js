import ApiData from "./apiData.js";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formRegistro');

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
        validarCampoTexto(document.getElementById('email'), 'error-email');
        validarCampoTexto(document.getElementById('password'), 'error-password');
        validarCampoTexto(document.getElementById('confirmPassword'), 'error-confirmPassword');
        validarCampoTexto(document.getElementById('domicilio'), 'error-domicilio');
        validarCampoTexto(document.getElementById('codigoPostal'), 'error-codigoPostal');

        // Validar que las contraseñas coincidan
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const errorPasswordMatch = document.getElementById('error-passwordMatch');

        if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
            esValido = false;
            password.classList.add('error');
            confirmPassword.classList.add('error');
            errorPasswordMatch.style.display = 'inline';
        } else {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
            errorPasswordMatch.style.display = 'none';
        }

        if (esValido) {
            const correoElectronico = document.getElementById('email').value;
            const nombreUsuario = document.getElementById('nombres').value;
            const domicilio = document.getElementById('domicilio').value;
            const codigoPostal = document.getElementById('codigoPostal').value;
            const pwd = password.value;

            try {
                const userResponse = await ApiData.registrarUsuario(correoElectronico, pwd, nombreUsuario, domicilio, codigoPostal);
                document.getElementById('formRegistro').reset();

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: 'Usuario registrado con exito.',
                    showConfirmButton: false,
                    timer: 1800
                    });

                setTimeout(() => {
                    window.location.href = './../index.html';
                    }, 1800);
            } catch (error) {
                mostrarAlerta('Error al registrar usuario. Reintente mas tarde.', 'danger')
            }
        }
    });

    const passwordFields = [document.getElementById('password'), document.getElementById('confirmPassword')];
    passwordFields.forEach(field => {
        field.addEventListener('input', function () {
            const errorPasswordMatch = document.getElementById('error-passwordMatch');
            if (password.value === confirmPassword.value) {
                password.classList.remove('error');
                confirmPassword.classList.remove('error');
                errorPasswordMatch.style.display = 'none';
            } else {
                password.classList.add('error');
                confirmPassword.classList.add('error');
                errorPasswordMatch.style.display = 'inline';
            }
        });
    });
});

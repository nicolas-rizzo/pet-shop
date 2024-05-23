document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRegistro');

    form.addEventListener('submit', function (event) {
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

        // Nombres y apellido
        validarCampoTexto(document.getElementById('nombres'), 'error-nombres');

        // Email
        validarCampoTexto(document.getElementById('email'), 'error-email');

        // Password
        validarCampoTexto(document.getElementById('password'), 'error-password');

        // Confirm Password
        validarCampoTexto(document.getElementById('confirmPassword'), 'error-confirmPassword');

        // Domicilio
        validarCampoTexto(document.getElementById('domicilio'), 'error-domicilio');

        // Código Postal
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
            alert('Registro enviado con exito!')
            form.submit();
        }
    });

    // Añadir evento input para las contraseñas para remover el error de coincidencia de contraseñas en tiempo real
    const passwordFields = [document.getElementById('password'), document.getElementById('confirmPassword')];
    passwordFields.forEach(field => {
        field.addEventListener('input', function () {
            const errorPasswordMatch = document.getElementById('error-passwordMatch');
            if (password.value === confirmPassword.value) {
                password.classList.remove('error');
                confirmPassword.classList.remove('error');
                errorPasswordMatch.style.display = 'none';
            }
        });
    });
});

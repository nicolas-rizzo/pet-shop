import ApiData from "./apiData.js";

const iconoContraseña = document.getElementById("iconoContraseña");
const inputContraseña = document.getElementById("password")

iconoContraseña.addEventListener('click',()=>{
    if (iconoContraseña.className == "bi bi-eye-fill") {
        iconoContraseña.className = "bi bi-eye-slash-fill"
        inputContraseña.type = "text"
    } else {
        iconoContraseña.className = "bi bi-eye-fill"
        inputContraseña.type = "password"
    }
})

const textoErrorLogin = document.getElementById('errorLogin');
const form = document.getElementById('form-login');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const correo = document.getElementById('user').value.trim();
    const contrasena= document.getElementById('password').value.trim();

    try {
        const userResponse = await ApiData.loginUsuario(correo,contrasena);

        if (userResponse) {
            form.reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Session Iniciada Correctamente",
                showConfirmButton: false,
                timer: 1800
              });

              /*
              setTimeout(() => {
                window.location.href = './../index.html';
              }, 1800);
              */
        } else {
            form.reset();
            textoErrorLogin.textContent='Correo o contraseña incorrectos'
        }
    } catch (error) {
        console.log("ERROR AL INICIAR SESSION")
    }
})

document.getElementById('logout-btn').addEventListener('click', async () => {
    try {
        const response = await ApiData.logoutUsuario()

        Swal.fire({
            position: "top-center",
            icon: "success",
            title: response.mensaje,
            showConfirmButton: false,
            timer: 1800
          });
          setTimeout(() => {
            window.location.href = './../index.html';
          }, 1800);
    } catch (error) {
        
    }
});

const isAuthenticated = async () => {
    try {
        const user = await ApiData.obtenerUsuario()

        if (user.email) {
            document.getElementById('user-name').innerText = user.nombres;
            document.getElementById('user-email').innerText = user.email;
            document.getElementById('bienvenido').style.display = 'block';
            document.getElementById('logout-btn').style.display = 'block';
            document.getElementById('form-login').style.display = 'none';
            document.getElementById('registrarse').style.display = 'none';
            document.getElementById('leyenda').style.display = 'none';

            if (user.admin) {
                const header = document.getElementById('contentIcons')
                header.innerHTML += '<a href="./animales.html"><i class="bi bi-plus-circle iconoPlus"></i></a>'
            }
        } else {
            document.getElementById('bienvenido').style.display = 'none';
            document.getElementById('logout-btn').style.display = 'none';
            document.getElementById('form-login').style.display = 'block';
            document.getElementById('registrarse').style.display = 'block';
            document.getElementById('leyenda').style.display = 'block';
        }
    } catch (error) {
    }
}

window.onload = isAuthenticated;
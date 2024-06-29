import ApiData from "./apiData.js";

const iconoContraseña = document.getElementById("iconoContraseña");

const inputContraseña = document.getElementById("password")

iconoContraseña.addEventListener('click',()=>{
    if(iconoContraseña.className=="bi bi-eye-fill"){
        iconoContraseña.className="bi bi-eye-slash-fill"
        inputContraseña.type="text"
    }
    else{
        iconoContraseña.className="bi bi-eye-fill"
        inputContraseña.type="password"
    }
})

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
                position: "top-center",
                icon: "success",
                title: "Session Iniciada Correctamente",
                showConfirmButton: false,
                timer: 1800
              });
              setTimeout(() => {
                window.location.href = './../index.html';
              }, 1800);
        } else {
            form.reset();
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Correo o Usuario Incorrectos",
                showConfirmButton: false,
                timer: 1500
              });
        }
    } catch (error) {
        console.log("ERROR AL INICIAR SESSION")
    }
})

const res = await ApiData.obtenerUsuario();
console.log(res);
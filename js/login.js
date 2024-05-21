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
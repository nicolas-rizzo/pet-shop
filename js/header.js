const listaR = document.getElementById('listaResponsive');
const links = document.getElementById('links');

listaR.addEventListener('click', () => {
    links.classList.toggle('mostrarLista');
    listaR.classList.toggle('rotarLista');
})

function mostrarAlerta(mensaje, tipo) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert alert-${tipo} alert-dismissible fade show`;
    alert.role = 'alert';
    alert.innerHTML = `
      ${mensaje}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `;
    alertContainer.appendChild(alert);

    // Remover la alerta después de 5 segundos
    setTimeout(() => {
        $(alert).alert('close');
    }, 5000);
}
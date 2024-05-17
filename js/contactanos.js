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

document.getElementById("contactForm").addEventListener("submit", function (event) {

    const nombre = document.getElementById("nombre").value;
    if (!/^[\p{L}\s'-]{3,30}$/u.test(nombre)) {
        alert("Nombre inválido. Debe contener solo letras, espacios, apóstrofes y acentos, y tener entre 3 y 30 caracteres.");
        event.preventDefault();
        return;
    }


    const telefono = document.getElementById("telefono").value;
    if (!/^\d{8,15}$/.test(telefono)) {
        alert("Número de teléfono inválido. Debe contener solo números y tener entre 8 y 15 caracteres.");
        event.preventDefault();
        return;
    }

    
    const correo = document.getElementById("correo").value;
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(correo)) {
        alert("Correo inválido. Debe ser una dirección de correo válida (aceStore@algo.com).");
        event.preventDefault();
        return;
    }


    const mensaje = document.getElementById("mensaje").value;
    if (mensaje.length < 10 || mensaje.length > 150) {
        alert("El mensaje debe tener entre 10 y 150 caracteres.");
        event.preventDefault();
        return;
    }
});



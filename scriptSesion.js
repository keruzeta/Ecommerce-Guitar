document.getElementById('Sesion').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    Swal.fire({
        title: 'Formulario enviado',
        text: `Nombre: ${nombre}\nEmail: ${email}`,
        icon: 'success',
        confirmButtonText: 'OK'
    });
});
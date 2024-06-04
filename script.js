
document.getElementById("formularioCompra").addEventListener('submit', simularCompra); 

let contadorCarrito = 0;

function agregarAlCarrito() {
  contadorCarrito++;
  document.getElementById("contadorCarrito").innerText = contadorCarrito;
}
//si contador carrito es mayor a 0, se va a mostrar el formulario y va a aparecer un cartel, sino va a aparecer un cartel 
//diciendo "Agrega productos al carrito antes de comprar!"
function mostrarFormulario() {
  if (contadorCarrito > 0) {
    document.getElementById("formularioCompra").style.display = "block";
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Primero Debe Rellenar el Formulario!',
      });
    
  } else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Agrega productos al carrito antes de comprar!',
    });
  }
}
function simularCompra(evento) {
    evento.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito!',
      showConfirmButton: true
    }).then(() => {
      // con esto oculto el formulario
      document.getElementById("formularioCompra").style.display = "none";
      // y esto reinicia el carrito
      contadorCarrito = 0;
      document.getElementById("contadorCarrito").innerText = contadorCarrito;
    });
  }

  
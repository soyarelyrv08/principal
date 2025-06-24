let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(producto, precio) {
  // Crear un objeto para el producto
  let item = { nombre: producto, precio: precio };

  // Añadir el producto al carrito
  carrito.push(item);

  // Guardar el carrito en el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar el carrito en la página del catálogo
  alert(`${producto} ha sido añadido al carrito.`);
}

function actualizarCarrito() {
  // Obtener el contenedor donde se mostrarán los productos
  let productosCarrito = document.getElementById('productos-carrito');
  productosCarrito.innerHTML = '';

  // Inicializar el total
  let total = 0;

  // Recorrer los productos en el carrito
  carrito.forEach((producto, index) => {
    total += producto.precio;

    // Crear un elemento de producto
    let div = document.createElement('div');
    div.classList.add('producto-carrito');
    div.innerHTML = `
      <p>${producto.nombre}</p>
      <p>$${producto.precio.toFixed(2)}</p>
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    productosCarrito.appendChild(div);
  });

  // Actualizar el total
  document.getElementById('total-price').textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
  // Eliminar el producto del carrito
  carrito.splice(index, 1);

  // Actualizar el carrito en el almacenamiento local
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar la vista del carrito
  actualizarCarrito();
}

function vaciarCarrito() {
  // Vaciar el carrito
  carrito = [];

  // Eliminar el carrito del almacenamiento local
  localStorage.removeItem('carrito');

  // Actualizar la vista del carrito
  actualizarCarrito();
}

// Llamar a la función para mostrar los productos en el carrito cuando la página se carga
if (window.location.pathname.includes('carrito.html')) {
  actualizarCarrito();
}
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('carrito.html')) {
    actualizarCarrito();

    const vaciarBtn = document.getElementById('vaciar-btn');
    if (vaciarBtn) {
      vaciarBtn.addEventListener('click', vaciarCarrito);
    }
  }
});


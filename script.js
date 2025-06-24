let carrito = [];

function agregarAlCarrito(nombreProducto, precio) {
    carrito.push({ nombre: nombreProducto, precio });
    
    const carritoContenido = document.getElementById('carrito-contenido');
    
    carritoContenido.innerHTML += `<p>${nombreProducto} - $${precio.toFixed(2)}</p>`;
}


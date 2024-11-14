const productos = [
    { id: 1, nombre: 'AGYA', precio: 12250.0, imagen: 'imagenes/agya.png' },
    { id: 2, nombre: 'LAND CRUISER SERIE 70', precio: 15000, imagen: 'imagenes/LAND_CRUISER_SERIE_70.png' },
    { id: 3, nombre: 'Producto 3', precio: 20, imagen: 'https://via.placeholder.com/150' },
];

let carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');
const botonVaciar = document.getElementById('boton-vaciar');
const carritoElement = document.getElementById('carrito');
const iconoCarrito = document.getElementById('icono-carrito');

function mostrarCarrito() {
    carritoElement.style.display = 'block';
}

function ocultarCarrito() {
    carritoElement.style.display = 'none';
}

function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto) => {
        total += producto.precio * producto.cantidad;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width:50px;"></td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}$</td>
            <td>${producto.cantidad}</td>
            <td>${(producto.precio * producto.cantidad).toFixed(2)}$</td>
            <td><button onclick="eliminarProducto(${producto.id})">Eliminar</button></td>
        `;
        listaCarrito.appendChild(tr);
    });

    totalElement.textContent = total.toFixed(2);
}

function anyadirProducto(id) {
    const productoEncontrado = productos.find(prod => prod.id === id);
    
    if (productoEncontrado) {
        const productoEnCarrito = carrito.find(prod => prod.id === id);
        
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({ ...productoEncontrado, cantidad: 1 });
        }
        
        actualizarCarrito();
        mostrarCarrito();
    }
}

function eliminarProducto(id) {
    carrito = carrito.filter(prod => prod.id !== id);
    actualizarCarrito();
}

botonVaciar.onclick = () => {
    carrito = [];
    actualizarCarrito();
};

// Mostrar u ocultar el carrito al hacer clic en el icono
iconoCarrito.onclick = () => {
   if (carritoElement.style.display === 'none' || carritoElement.style.display === '') {
       mostrarCarrito();
   } else {
       ocultarCarrito();
   }
};

// Cargar productos en el DOM
productos.forEach(producto => {
    const divProducto = document.createElement('div');
    divProducto.className = 'producto';
    
    divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}$</p>
        <button onclick="anyadirProducto(${producto.id})">Agregar al Carrito</button>
    `;
    
    document.getElementById('productos').appendChild(divProducto);
});
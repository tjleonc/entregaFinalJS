document.addEventListener('DOMContentLoaded', function() {
  const productoContainer = document.getElementById("productos");

  //cargar el archivo json
  fetch('./js/productos.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('tarjeta-producto');
        card.innerHTML = `
          <img src="./img/productos/${producto.id}.png" alt="Neumaticos">
          <img src="./img/productos/${producto.id}.jpg" alt="Llantas">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio}</p>
          <button>Agregar al carrito</button>
        `;
        productoContainer.appendChild(card);
        card.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
      });
    })









});
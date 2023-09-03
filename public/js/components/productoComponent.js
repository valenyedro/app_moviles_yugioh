export const ProductoComponent = (nombre, precio, image, id) => `
    <a class="producto-link">
        <div class="card" id="card_${id}">
            <img class="foto-card" src="${image}"></img>
            <p class="nombre-card">${nombre}</p>
            <p class="descrip-card">descripcion corta de la carta que se esta mostrando y se corta...</p>
            <p class="precio-card">${precio}</p>
            <button class="card-cart" id="card_cart"></button>
        </div>
    </a>
`;
export const ProductoComponent = (nombre, descripcion, precio, image, id) => `
    <a class="producto-link">
        <div class="card" id="card_${id}">
            <img class="foto-card" src="${image}"></img>
            <p class="nombre-card">${nombre}</p>
            <p class="descrip-card">${descripcion}...</p>
            <p class="precio-card">${precio}</p>
            <button class="card-cart" id="card_cart"></button>
        </div>
    </a>
`;
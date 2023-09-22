export const MonsterDetailComponent = (id, img, name, descrip, price, type, race, atk, def, level) => `
    <div class="main-product" id="mainproduct_${id}">
        <div class="zoom-area" id="zoom_area">
            <img class="main-product--img" src="${img}"></img>
        </div>
        <ul class="main-product--list">
            <li><p class="main-product--title">${name}</p></li>
            <li><p class="main-product--price">${price}</p></li>
            <li><p class="main-product--descrip">${descrip}</p></li>
            <li><p class="main-product--additional" id="card_type"><b>Tipo:</b> ${type}</p></li>
            <li><p class="main-product--additional"><b>Raza:</b> ${race}</p></li>
            <li><p class="main-product--additional"><b>Ataque:</b> ${atk}</p></li>
            <li><p class="main-product--additional"><b>Defensa:</b> ${def}</p></li>
            <li><p class="main-product--additional"><b>Nivel:</b> ${level}</p></li>
            <li class="quantity-div">
                <p class="main-product--quantity"><b>Cantidad:</b> </p>
                <input type="number" class="quantity" id="quantity" value="1" min="1" max="100" maxlength="3">
                <div class="btn_container">
                    <button class="add-to-cart" id="add_to_cart">Añadir al carrito</button>
                    <button class="add-to-cart" id="share_btn"> <img class="share--img" src="../../assets/img/share.png"></img></button>
                </div>
            </li> 
        </ul>
    </div>
`

export const TrapMagicComponent = (id, img, name, descrip, price, type, race) => `
    <div class="main-product" id="mainproduct_${id}">
        <div class="zoom-area" id="zoom_area">
            <img class="main-product--img" src="${img}"></img>
        </div>
        <ul class="main-product--list">
            <li><p class="main-product--title">${name}</p></li>
            <li><p class="main-product--price">${price}</p></li>
            <li><p class="main-product--descrip">${descrip}</p></li>
            <li><p class="main-product--additional" id="card_type"><b>Tipo:</b> ${type}</p></li>
            <li class="quantity-div">
                <p class="main-product--quantity"><b>Cantidad:</b> </p>
                <input type="number" class="quantity" id="quantity" value="1" min="1" max="100" maxlength="3">
                <div class="btn_container">
                <button class="add-to-cart" id="add_to_cart">Añadir al carrito</button>
                <button class="add-to-cart" id="share_btn"> <img class="share--img" src="../../assets/img/share.png"></img></button>
            </div>
            </li> 
        </ul>
    </div>
`
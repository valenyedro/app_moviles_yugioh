export const HeaderComponent = () => `
    <nav class="nav"> 
    <ul>
        <li class="cards"><a href="http://localhost:3000/" target="">Cartas</a></li>
        <li class="historial-header"><a href="http://localhost:3000/historial">Historial</a></li>
        <li class="logo-li"><a href="http://localhost:3000/"><img src="../../assets/img/yugiohlogo.png" alt="Yu-Gi-Oh" class="logo"></a></li>
        <li class="contact"><a href="http://localhost:3000/contacto">Contacto</a></li>
        <li class="search">
            <div class="search-div">
                <button class="button-search" id="button_search" ></button>
                <input type="text" class="input-search" id="input_search" value="" placeholder="Buscar...">
                <button class="button-deletesearch" id="button_deletesearch" ></button>
            </div>
        </li>
        <li class="cart">
            <button class="button-cart" id="button_cart"><span class="cart-count" id="cart_count">0</span></button>
        </li>
    </ul>
    </nav>
    
    <div class="subheader-div">
        <h4 class="subheader-h4">POR EL CORAZÓN DE LAS CARTAS</h4>
    </div>
`
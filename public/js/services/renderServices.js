import { ProductoComponent } from "../components/productoComponent.js";
import { FooterComponent } from "../components/footerComponent.js"
import { HeaderComponent } from "../components/headerComponent.js";
import { SidebarComponent } from "../components/sidebarComponent.js";

export const RenderAllProductos = (json) => {
    document.getElementById('cards_section').innerHTML = "";
    for(let i=0; i<=11; i++){
        let number = Math.floor(Math.random()*1000)
        let _sectionProd = document.getElementById('cards_section');
        let name = json.data[number].name;
        let img = json.data[number].card_images[0].image_url;
        let price = `$${json.data[number].card_prices[0].ebay_price}`;
        let id = json.data[number].id;
        _sectionProd.innerHTML += ProductoComponent(name, price, img, id);
    }
}

export const RenderRandomProduct = (json) => {
    let _sectionProd = document.getElementById('cards_section');
    let name = json.name;
    let img = json.card_images[0].image_url;
    let price = `$${json.card_prices[0].cardmarket_price}`;
    let id = json.id;
    _sectionProd.innerHTML += ProductoComponent(name, price, img, id);
}

export const RenderFooter = () => {
    document.getElementById('footer').innerHTML = "";
    document.getElementById('footer').innerHTML += FooterComponent();
}

export const RenderHeader = () => {
    document.getElementById('header').innerHTML = "";
    document.getElementById('header').innerHTML += HeaderComponent();
}

export const RenderSidebar = () => {
    document.getElementById('cart_sidebar').innerHTML = "";
    document.getElementById('cart_sidebar').innerHTML += SidebarComponent();
}
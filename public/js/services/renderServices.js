import { ProductoComponent } from "../components/productoComponent.js";
import { FooterComponent } from "../components/footerComponent.js"
import { HeaderComponent } from "../components/headerComponent.js";
import { SidebarComponent } from "../components/sidebarComponent.js";
import { FilterComponent } from "../components/filterComponent.js";
import { MonsterDetailComponent, TrapMagicComponent } from "../components/productDetailComponent.js";
import { CartItemComponent } from "../components/cartItemComponent.js";
import { getCart } from "./cartService.js";
import { getHistorial } from "./historialServices.js";
import { HistorialError } from "./errorServices.js";

export const RenderAllProductos = (json) => {
    document.getElementById('cards_section').innerHTML = "";
    let repeatedNumbers = [];
    let number;
    for(let i=0; i<=11; i++){
        do{
            number = Math.floor(Math.random()*json.data.length)
        } while (repeatedNumbers.includes(number) && json.data.length !== repeatedNumbers.length)
        if(!repeatedNumbers.includes(number) && !json.data.length !== repeatedNumbers.length){
            let _sectionProd = document.getElementById('cards_section');
            let name = json.data[number].name;
            let descrip = json.data[number].desc.slice(0,47);
            let img = json.data[number].card_images[0].image_url;
            let price = `$${json.data[number].card_prices[0].ebay_price}`;
            let id = json.data[number].id;
            _sectionProd.innerHTML += ProductoComponent(name, descrip, price, img, id);
            repeatedNumbers.push(number);
        }
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

export const RenderProductDetail = (json) => {
    document.getElementById('product_detail').innerHTML = "";
    let id = json.data[0].id;
    let img = json.data[0].card_images[0].image_url;
    let name = json.data[0].name;
    let descrip = json.data[0].desc;
    descrip = descrip.replaceAll('●', '<br>●')
    let price = `$${json.data[0].card_prices[0].ebay_price}`;
    let type = json.data[0].type;
    sessionStorage.setItem('related_type',json.data[0].type);
    if(!json.data[0].type.includes('Monster')){
        document.getElementById('product_detail').innerHTML += TrapMagicComponent(id,img,name,descrip,price,type);
    }
    else{
        let race = json.data[0].race
        let atk = json.data[0].atk;
        let def = json.data[0].def != undefined ? json.data[0].def : "-";
        let level = json.data[0].level != undefined ? `${json.data[0].level}☆` : "-";
        document.getElementById('product_detail').innerHTML += MonsterDetailComponent(id,img,name,descrip,price,type,race,atk,def,level);
    }
}

export const RenderRelatedProducts = (json) => {
    let _productSection = document.getElementById('related_products');
    let alreadyRendered = [];
    let random;
    let _relatedSection = document.createElement('div');
    _relatedSection.innerHTML += `<h4 class='related-h4'>Cartas relacionadas</h4>`
    _relatedSection.classList.add('related-section')
    for(let i=0; i<3; i++){
        do{
            random = Math.floor(Math.random() * json.data.length);
        } while(alreadyRendered.includes(random))
        let name = json.data[random].name;
        let desc = json.data[random].desc.slice(0,60);
        let img = json.data[random].card_images[0].image_url;
        let price = `$${json.data[random].card_prices[0].ebay_price}`;
        let id = json.data[random].id;
        _relatedSection.innerHTML += ProductoComponent(name, desc, price, img, id);
        alreadyRendered.push(random);
    }
    _productSection.appendChild(_relatedSection);
}

export const RenderFilter = () => {
    document.getElementById('filter_div').innerHTML = "";
    document.getElementById('filter_div').innerHTML += FilterComponent();
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

export const RenderAddCartItem = (cardItem) => {

     let id = cardItem.card.id;
     let img = cardItem.card.imagen;
     let price = cardItem.card.precio;
     let name = cardItem.card.nombre;
     let quantity = cardItem.cantidad;
    document.getElementById('main_sidebar').innerHTML += CartItemComponent(id,img,name,price,quantity);

}

export const RenderCardSidebar = () => {

    console.log("render side")
    let card = Array.from(getCart());

    $("#main_sidebar").empty();
    $.each(card, function (index, cardItem) {

        RenderAddCartItem(cardItem);
    });
    
    RenderCarritoPrecio();
}



export const RenderCarritoPrecio = () => {

    let card = Array.from(getCart());
    let precioTotal = 0;

    
    $.each(card, function (index, cardItem) {

        let precio = cardItem.card.precio;
        let cantidad = cardItem.cantidad;
        let precioNumero = parseFloat(precio.replace('$', ''));

        let precioItems = precioNumero*cantidad;
        precioTotal += precioItems;
    });
    
    let precioFinal = precioTotal.toFixed(2);
    $(".subtotal-sidebar").text(`Subtotal: $${precioFinal}`)
  }

export const RenderHistorialItem = (historialItem) => {
    let id = historialItem.id;
    let imagen = historialItem.imagen;
    let nombre = historialItem.nombre;
    let descripcion = historialItem.descripcion;
    let precio = historialItem.precio;
    document.getElementById('cards_section').innerHTML += ProductoComponent(nombre,descripcion,precio,imagen,id);
}

export const RenderHistorial = () => {
    let historial = Array.from(getHistorial());
    if(historial.length === 0){
        HistorialError();
    }
    else{
        $("#cards_section").empty();
        $.each(historial.reverse(), function (index, historialItem) {
            RenderHistorialItem(historialItem);
        });
    }
}

export const RenderPage = (json) => {
    document.getElementById('cards_section').innerHTML = "";
    for(let i=0; i<json.data.length; i++){
        let _sectionProd = document.getElementById('cards_section');
        let name = json.data[i].name;
        let descrip = json.data[i].desc.slice(0,47);
        let img = json.data[i].card_images[0].image_url;
        let price = `$${json.data[i].card_prices[0].ebay_price}`;
        let id = json.data[i].id;
        _sectionProd.innerHTML += ProductoComponent(name, descrip, price, img, id);
    }
}
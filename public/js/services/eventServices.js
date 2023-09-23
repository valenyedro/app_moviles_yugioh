import { ErrorComponent } from "../components/errorComponent.js";
import { HistorialError, IndexProductsError, ProductsSearchError } from "./errorServices.js";
import { GetPage, GetProductosFiltrados } from "./fetchServices.js";
import { RenderAllProductos, RenderPage } from "./renderServices.js";
import { getCart , AddProductToCart , ModifyProductQuantity , DeleteProductFromCart, GetProductoById } from "./cartService.js";
import { RenderCardSidebar , RenderCarritoPrecio } from "./renderServices.js";
import { showNotification , CarritoCount } from "./auxiliaryServices.js";
import { AddItemToHistorial, CleanHistorial } from "./historialServices.js";
import {saveShareContent} from "./shareService.js";

export const LinkCardsEvent = () => {
    let _sectionCards;
    if(location.href === 'http://localhost:3000/' || location.href === 'http://localhost:3000/historial')
        _sectionCards = document.getElementById('cards_section');
    else if(location.href.includes('http://localhost:3000/producto/'))
        _sectionCards = document.querySelector('.main-prod-section')
    _sectionCards.addEventListener('click', function(e) {
        if(e.target && e.target.classList.contains('card')){
            let idProductoACargar = e.target.id;
            idProductoACargar = idProductoACargar.substring(5, idProductoACargar.length);
            e.target.parentNode.setAttribute('href', `/producto/${idProductoACargar}`);
        }
        else if(e.target && e.target.classList.contains('foto-card')){
            let idProductoACargar = e.target.parentNode.id;
            idProductoACargar = idProductoACargar.substring(5, idProductoACargar.length);
            e.target.parentNode.parentNode.setAttribute('href', `/producto/${idProductoACargar}`);
        }
    })
}

export const ApplyFiltersEvent = () => {
    document.getElementById('apply_filters').addEventListener('click', function() {
        let name = $('#input_search').val();
        let type = $('#type_input').val();
        let atk = $('#atk_input').val();
        let atkFilter = $('#atk_input_filter').val();
        let def = $('#def_input').val();
        let defFilter = $('#def_input_filter').val();
        let level = $('#level_input').val();
        document.getElementById('cards_section').innerHTML = ErrorComponent();
        GetProductosFiltrados(name,type,atk,atkFilter,def,defFilter,level,RenderAllProductos,ProductsSearchError);
        $("#paginacion").hide();
    })
}

const GeneralButtonsEvents = () => {
    $('#button_deletesearch').click(function() {
        $('#input_search').val('');
    });

    $('#input_search').keypress(function(e) {
        if (e.key === 'Enter') {
            $('#button_search').click();
        }
    });

    $('#button_cart').click(function() {
        $('#cart_sidebar').toggleClass('active');
        RenderCardSidebar();
    });

    $('#exit_cart').click(function() {
        $('#cart_sidebar').toggleClass('active');
    });
}


export const CarritoEvents = () => {
    let cartItemsList = getCart();
    document.getElementById('cart_sidebar').addEventListener('click', function(e) {

        if(e.target && e.target.classList.contains('sumar-producto')){
            let listProduct = e.target.parentNode.parentNode;
            for (let i = 0; i < listProduct.children.length; i++) {
                if(listProduct.children[i].classList.contains('cantidad--li')){
                    let item = listProduct.children[i].firstChild;
                    let idProducto = listProduct.parentNode.id.substring(9);
                    let cantidad = parseInt(item.innerText.substring(10, item.innerText.length)) + 1;

                    ModifyProductQuantity(idProducto, cantidad);
                    
                    cartItemsList = getCart();
                    let localItem = cartItemsList.find(e => e.card.id === idProducto);
                    localItem.quantity = parseInt(localItem.quantity) + 1;
    
                    item.innerHTML = `<b>Cantidad:</b> ${cantidad}`;
                    RenderCarritoPrecio();
                }
              }
        }
        else if(e.target && e.target.classList.contains('restar-producto')){
            let listProduct = e.target.parentNode.parentNode;
            for (let i = 0; i < listProduct.children.length; i++) {
                if(listProduct.children[i].classList.contains('cantidad--li')){
                    let item = listProduct.children[i].firstChild;
                    let idProducto = listProduct.parentNode.id.substring(9);
                    let cantidad = parseInt(item.innerText.substring(10, item.innerText.length)) - 1;
                    if(cantidad >= 1){

                    ModifyProductQuantity(idProducto, cantidad);
                        
                    cartItemsList = getCart();
                    let localItem = cartItemsList.find(e => e.card.id === idProducto);
                    localItem.quantity = parseInt(localItem.quantity) - 1;
                    
                    item.innerHTML = `<b>Cantidad:</b> ${cantidad}`;
                    RenderCarritoPrecio();
                    }

                }
              }
        }
        else if(e.target && e.target.classList.contains('delete-producto')){
            let mainSidebar = e.target.parentNode.parentNode.parentNode.parentNode;
            let item = e.target.parentNode.parentNode.parentNode;
            let idProduct = item.id.substring(9, item.id.length);
            DeleteProductFromCart(idProduct);
            mainSidebar.removeChild(item);
            RenderCarritoPrecio();
        }
        else if(e.target && e.target.classList.contains('generate-order-sidebar')){
            GenerateOrder(1, RenderOrden, () => {showNotification('Petición inválida', 'Para generar la orden, primero agregue productos a su carrito.', 'error')});
        }
       CarritoCount();
    })
}

export const AddToCartEvent = () => {

    if(location.href.includes('http://localhost:3000/producto/')){
        
    $(document).ready(function() {

        $('body').on('click', '#add_to_cart', 
        function(e) {
        
            let $parentDiv = $(this).closest('.main-product');

            let id = $parentDiv.attr("id").replace("mainproduct_", "card_");
            let imagen = $parentDiv.find('.main-product--img').attr("src");
            let nombreCard = $parentDiv.find('.main-product--title').text();
            let precio = $parentDiv.find('.main-product--price').text();
            let quantity =  parseInt($parentDiv.find('.quantity').val(),10);

            let cardItem = {
                card: {
                    id: id,
                    imagen: imagen,
                    nombre: nombreCard,
                    precio: precio,
                },
                    cantidad: quantity
                }
            
                AddProductToCart(cardItem, quantity,() => {showNotification('Producto agregado al carrito', 'El producto fue agregado exitosamente.', 'success')}
                                        ,() => {showNotification('Producto ya existente', 'El producto ya está en el carrito. Puedes modificar allí la cantidad.', 'error')});
            RenderCardSidebar();
            CarritoCount();

            $parentDiv.find('.quantity').val(GetProductoById(id).cantidad);
            
        })
    })
    }
    else if(location.href === 'http://localhost:3000/' || location.href === 'http://localhost:3000/historial'){

    $(document).ready(function() {
        $('body').on('click', '.card-cart', function(e) {
        
        let $parentDiv = $(this).closest('.card');

        let id = $parentDiv.attr("id");
        let imagen = $parentDiv.find('.foto-card').attr("src");
        let nombreCard = $parentDiv.find('.nombre-card').text();
        let precio = $parentDiv.find('.precio-card').text();

        let cardItem = {
            card: {
                id: id,
                imagen: imagen,
                nombre: nombreCard,
                precio: precio,
            },
                cantidad: 1
            }
           
            AddProductToCart(cardItem, 1,() => {showNotification('Producto agregado al carrito', 'El producto fue agregado exitosamente.', 'success')}
                                        ,() => {showNotification('Producto ya existente', 'El producto ya está en el carrito. Puedes modificar allí la cantidad.', 'error')});

            RenderCardSidebar();
            CarritoCount();
        });
    });

   
 }
}

export const IndexOnloadEvents = () => {
    document.getElementById('button_search').addEventListener('click', function() {
        window.scrollTo({
            top: 300, 
            behavior: "smooth"
        });
        document.getElementById('apply_filters').click();
    })
    document.getElementById('clean_filters').addEventListener('click', function() {
        $('#type_input').val('');
        $('#atk_input').val('');
        $('#atk_input_filter').val('desde');
        $('#def_input').val('');
        $('#def_input_filter').val('desde');
        $('#level_input').val('');
    })
    GeneralButtonsEvents();
    LinkCardsEvent();
    ApplyFiltersEvent();
    AddToCartEvent();
    CarritoEvents();
    CarritoCount();
    AddToHistorialEvent();
    PageButtonsEvents();
}

export const ContactOnLoadEvents = () => {
    GeneralButtonsEvents();
}

export const ProductoOnloadEvents = () => {
    $('#button_search').click(function() {
        window.location.href = 'http://localhost:3000/';
    });

    GeneralButtonsEvents();
    ProductZoomEvent();
    LinkCardsEvent();
    AddToCartEvent();
    CarritoEvents();
    CarritoCount();
    AddToHistorialEvent();
    ShareButtonEvent();
}


export const HistorialOnLoadEvents = () => {
    GeneralButtonsEvents();
    AddToCartEvent();
    CarritoEvents();
    CarritoCount();
    LinkCardsEvent();
    LimpiarHistorialEvent();
}

export const ProductZoomEvent = () => {
    document.getElementById('main_product_section').addEventListener('mousemove', function(e) {
        if(e.target && e.target.classList.contains('zoom-area')){
            let div = e.target;
            let image = e.target.children[0];
    
            let mouseX = e.clientX - div.offsetLeft;
            let mouseY = e.clientY - div.offsetTop;
    
            let mWidth = div.offsetWidth;
            let mHeight = div.offsetHeight;
    
            mouseX = mouseX / mWidth * 100;
            mouseY = mouseY / mHeight * 100;
            image.style.transform = `translate(-${mouseX}%,-${mouseY}%) scale(2)`;
    
            div.addEventListener('mouseleave', function(e) {
                if(e.target && e.target.classList.contains('zoom-area')){
                    e.target.children[0].style.transform = `translate(-50%,-50%) scale(1)`;
                }
            })
        }
    })
} 

export const AddToHistorialEvent = () => {
    $(document).ready(function() {
        $('body').on('click', '.producto-link', function(e) {
            let $div = $(this);
            let id = $div.find('.card').attr("id");
            id = id.slice(5,id.length);
            let imagen = $div.find('.foto-card').attr("src");
            let nombreCard = $div.find('.nombre-card').text();
            let descripCard = $div.find('.descrip-card').text();
            let precio = $div.find('.precio-card').text();
            let historialItem = {
                id: id,
                imagen: imagen,
                nombre: nombreCard,
                descripcion: descripCard,
                precio: precio
            }
            AddItemToHistorial(historialItem);
        });
    });
}

export const ShareButtonEvent = () => {
    $(document).ready(function(){
        $('body').on('click','#share_btn',function(e){
            
            let $parentDiv = $(this).closest('.main-product');

            let id = $parentDiv.attr("id").replace("mainproduct_", "card_");
            let imagen = $parentDiv.find('.main-product--img').attr("src");
            let nombreCard = $parentDiv.find('.main-product--title').text();
            let precio = $parentDiv.find('.main-product--price').text();

            saveShareContent({id : id , imagen : imagen , nombre : nombreCard , precio : precio})

            location.href = "/share";
        })
    })
}

export const LimpiarHistorialEvent = () => {
    $('#limpiar_hist_button').click(function() {
        CleanHistorial();
        $('#limpiar_hist_button').prop("disabled", true);
        HistorialError();
    })
}

export const PageButtonsEvents = () => {
    let currentPage = $('#current_page').text();
    if(currentPage == 1){
        $('#previous_page').css("background-color", "grey");
        $("#previous_page").prop("disabled", true);
    }

    $('#next_page').click(function() {
        let currentPage = $('#current_page').text();
        let offset = currentPage * 12;
        GetPage(offset,RenderPage,IndexProductsError);
        $("html, body").animate({ scrollTop: 0 }, "normal");
        if(currentPage !== 1){
            $('#previous_page').css("background-color", "black");
            $("#previous_page").prop("disabled", false);
        }
        $('#current_page').text(`${parseInt(currentPage) + 1}`);
    });
    $('#previous_page').click(function() {
        let currentPage = $('#current_page').text();
        let offset = (parseInt(currentPage) - 2) * 12;
        GetPage(offset,RenderPage,IndexProductsError);
        $("html, body").animate({ scrollTop: 0 }, "normal");
        if(currentPage == 2){
            $('#previous_page').css("background-color", "grey");
            $("#previous_page").prop("disabled", true);
        }
        $('#current_page').text(`${parseInt(currentPage) - 1}`);
    });
}
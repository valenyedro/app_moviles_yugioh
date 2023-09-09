import { addToCart, getCart } from "./cartService.js";
import { RenderAddCartItem, RenderCardSidebar , RenderCleanSideBar } from "./renderServices.js";

export const LinkCardsEvent = () => {
    let _sectionCards;
    _sectionCards = document.getElementById('cards_section');
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

const GeneralButtonsEvents = () => {
    document.getElementById('button_deletesearch').addEventListener('click', function() {
        document.getElementById('input_search').value = '';
    })
    document.getElementById('input_search').addEventListener('keypress', function(e) {
        if (e.key === 'Enter')
            document.getElementById('button_search').click()
    })
    document.getElementById('button_cart').addEventListener('click', function() {
        document.getElementById('cart_sidebar').classList.toggle('active');
        RenderCardSidebar();
    })
    document.getElementById('exit_cart').addEventListener('click', function() {
        document.getElementById('cart_sidebar').classList.toggle('active');
        RenderCleanSideBar();
    })
}

export const IndexOnloadEvents = () => {
    document.getElementById('button_search').addEventListener('click', function() {
        window.scrollTo({
            top: 770, 
            behavior: "smooth"
        });
    })
    GeneralButtonsEvents();
    LinkCardsEvent();
    buttonCartEvent();
}

export const ContactOnLoadEvents = () => {
    GeneralButtonsEvents();
}


export const buttonCartEvent = () => {
    
    $(document).ready(function() {
        $('body').on('click', '.card-cart', function() {
            
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

                cantidad: 0
            }
            
            addToCart(cardItem);

        });
    });
      
}

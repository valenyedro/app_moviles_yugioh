import { ErrorComponent } from "../components/errorComponent.js";
import { ProductsSearchError } from "./errorServices.js";
import { GetProductosFiltrados } from "./fetchServices.js";
import { RenderAllProductos } from "./renderServices.js";

export const LinkCardsEvent = () => {
    let _sectionCards;
    if(location.href === 'http://localhost:3000/')
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
        let name = document.getElementById('input_search').value;
        let type = document.getElementById('type_input').value;
        let atk = document.getElementById('atk_input').value;
        let atkFilter = document.getElementById('atk_input_filter').value;
        let def = document.getElementById('def_input').value;
        let defFilter = document.getElementById('def_input_filter').value;
        let level = document.getElementById('level_input').value;
        document.getElementById('cards_section').innerHTML = ErrorComponent();
        GetProductosFiltrados(name,type,atk,atkFilter,def,defFilter,level,RenderAllProductos,ProductsSearchError);
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
    })
    document.getElementById('exit_cart').addEventListener('click', function() {
        document.getElementById('cart_sidebar').classList.toggle('active');
    })
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
        document.getElementById('type_input').value = '';
        document.getElementById('atk_input').value = '';
        document.getElementById('atk_input_filter').value = 'desde';
        document.getElementById('def_input').value = '';
        document.getElementById('def_input_filter').value = 'desde';
        document.getElementById('level_input').value = '';
    })
    GeneralButtonsEvents();
    LinkCardsEvent();
    ApplyFiltersEvent();
}
export const ContactOnLoadEvents = () => {
    GeneralButtonsEvents();
}

export const ProductoOnloadEvents = () => {
    document.getElementById('button_search').addEventListener('click', function() {
        window.location.href = 'http://localhost:3000/';
    })

    GeneralButtonsEvents();
    ProductZoomEvent();
    LinkCardsEvent();
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
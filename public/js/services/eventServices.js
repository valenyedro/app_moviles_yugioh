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
            top: 770, 
            behavior: "smooth"
        });
    })
    
    GeneralButtonsEvents();
    LinkCardsEvent();
}
export const ContactOnLoadEvents = () => {
    GeneralButtonsEvents();
}
import { addToCart, getCart , AddProductToCart , ModifyProductQuantity , DeleteProductFromCart } from "./cartService.js";
import { RenderAddCartItem, RenderCardSidebar , RenderCarritoPrecio, RenderCleanSideBar } from "./renderServices.js";
import { showNotification } from "./auxiliaryServices.js";

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
        }
        else if(e.target && e.target.classList.contains('generate-order-sidebar')){
            GenerateOrder(1, RenderOrden, () => {showNotification('Petición inválida', 'Para generar la orden, primero agregue productos a su carrito.', 'error')});
        }
       // CarritoCount();
    })
}

export const AddToCartEvent = () => {

    if(location.href.includes('http://localhost:3000/producto/')){
        
        document.getElementById('main_product_section').addEventListener('click', function(e) {
            if(e.target && e.target.classList.contains('add-to-cart')){
                
                let cantidad = document.getElementById('quantity').value;
                AddProductToCart(GetParametro(), cantidad, () => (GetProductoById(GetParametro(), AddCartItem, () => {showNotification('Producto agregado al carrito', 'El producto fue agregado exitosamente.', 'success')}))
                                ,() => {showNotification('Producto ya existente', 'El producto ya está en el carrito. Puedes modificar allí la cantidad.', 'error')});
                document.getElementById('generate_order_sidebar').innerText = 'Finalizar Compra';
                document.getElementById('generate_order_sidebar').disabled = false;
            }
        })
    }
    else if(location.href === 'http://localhost:3000/'){

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
                cantidad: 0
            }
           
            AddProductToCart(cardItem, 1,() => {showNotification('Producto agregado al carrito', 'El producto fue agregado exitosamente.', 'success')})
                                        ,() => {showNotification('Producto ya existente', 'El producto ya está en el carrito. Puedes modificar allí la cantidad.', 'error')};
            document.getElementById('generate_order_sidebar').innerText = 'Finalizar Compra';
            document.getElementById('generate_order_sidebar').disabled = false;
            
        });
    });

   
 }
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
    AddToCartEvent();
    CarritoEvents();
}

export const ContactOnLoadEvents = () => {
    GeneralButtonsEvents();
}

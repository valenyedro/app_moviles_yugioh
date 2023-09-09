export const saveCart = (cartItemsList) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
  }
  
  export const getCart = () => {
    let cartItemsList = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItemsList;
  }
  
  export const addToCart = (item) => {
    let cartItemsList = getCart();

    const existingItem = cartItemsList.find((cartItem) => cartItem.card.id === item.card.id);

    if (existingItem) {
        existingItem.cantidad += 1;
    } else {
        item.cantidad = 1;
        cartItemsList.push(item);
    }

    saveCart(cartItemsList);
}
  
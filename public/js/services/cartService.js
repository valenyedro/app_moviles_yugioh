export const saveCart = (cartItemsList) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
  }
  
  export const getCart = () => {
    let cartItemsList = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItemsList;
  }
  
  export const addToCart = (item) => {
    let cartItemsList = getCart();
    cartItemsList.push(item);
    saveCart(cartItemsList);
  }
  
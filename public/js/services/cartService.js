export const saveCart = (cartItemsList) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
  }
  
  export const getCart = () => {
    let cartItemsList = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItemsList;
  }
  
  export const addToCart = (item,cantidad) => {
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

export const ModifyProductQuantity = (idProduct,cantidad) =>{
console.log("modifi")
  let cartItemsList = getCart();
  
  const existingItem = cartItemsList.find((cartItem) => cartItem.card.id ===  idProduct);
  console.log(existingItem+"zzz ID"+idProduct)
  existingItem.cantidad = cantidad;
  
  saveCart(cartItemsList);

}

export const DeleteProductFromCart = (idProduct) => {
  
  let cartItemsList = getCart();
  cartItemsList = cartItemsList.filter((cartItem) => cartItem.card.id !== idProduct);

  saveCart(cartItemsList);
}


export const AddProductToCart = (product, cantidad, callback, errorCallback) => {
  
  addToCart(product,cantidad)

    callback();
  

}
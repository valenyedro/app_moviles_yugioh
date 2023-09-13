export const saveCart = (cartItemsList) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList));
  }
  
  export const getCart = () => {
    let cartItemsList = JSON.parse(localStorage.getItem('cartItems')) || [];
    return cartItemsList;
  }
  
export const addToCart = (item, cantidad) => {
  let cartItemsList = getCart();

  const existingItem = cartItemsList.find((cartItem) => cartItem.card.id === item.card.id);

  if (!existingItem) {
    cartItemsList.push(item);
  } else {

    if (cantidad) { existingItem.cantidad = existingItem.cantidad + cantidad } 
    else {
      existingItem.cantidad++;
    }

  }

  saveCart(cartItemsList);
}

export const ModifyProductQuantity = (idProduct,cantidad) =>{

  let cartItemsList = getCart();
  
  const existingItem = cartItemsList.find((cartItem) => cartItem.card.id ===  idProduct);

  existingItem.cantidad = cantidad;
  
  saveCart(cartItemsList);

}

export const DeleteProductFromCart = (idProduct) => {

  let cartItemsList = getCart();
  cartItemsList = cartItemsList.filter((cartItem) => cartItem.card.id !== idProduct);

  saveCart(cartItemsList);
}


export const AddProductToCart = (product, cantidad, callback, errorCallback) => {

  let cartItemsList = getCart();
  const existingItem = cartItemsList.find((cartItem) => cartItem.card.id ===  product.card.id);

  if(true){

  if(existingItem){
      errorCallback();
  }else{
    callback();
    addToCart(product, cantidad)
  }
    
  }else{
    callback();
    addToCart(product, cantidad)
  }
      
}

export const GetProductoById = (idProduct) => {

  let cartItemsList = getCart();
  
  const existingItem = cartItemsList.find((cartItem) => cartItem.card.id ===  idProduct);
  return existingItem;
}
import { updateCartItemQuantity } from "./cartUtils";

export const handleDecrease = (item,quantity, setQuantity, cartItems, itemId,setCartItems,removeFromCart) => {
  if (quantity > 0) {
    if (quantity === 1) {
      removeFromCart(itemId);
      setQuantity(0);
    }
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    const updatedCartItems = updateCartItemQuantity(
      cartItems,
      itemId,
      newQuantity
    );
    // Update cart items in context and local storage
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  }
};

export const handleIncrease = (item,quantity, setQuantity, cartItems, itemId,setCartItems,addToCart) => {
  if (quantity === 0) {
    addToCart(item);
  }
  const newQuantity = quantity + 1;
  setQuantity(newQuantity);
  const updatedCartItems = updateCartItemQuantity(
    cartItems,
    itemId,
    newQuantity
  );
    // Update cart items in context and local storage
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useCart } from "../../../context/CartContext";

const AddToCart = ({ item }) => {
  const { addToCart, cartItems, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItemExists = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );
    setIsInCart(cartItemExists);
  }, [cartItems, item]);

  // Function to add item to cart
  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(item.id);
      setIsInCart(false);
      item.quantity = 0;
    } else {
      addToCart(item);
      setIsInCart(true);
      item.quantity = 1;
    }
  };
  return { handleAddToCart, isInCart, setIsInCart };
};

export default AddToCart;

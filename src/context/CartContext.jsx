/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Initialize cart items from local storage on component mount
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If item already exists in cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + item.quantity,
      };
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      // If item does not exist in cart, add it to cart
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  // Function to check if an item is in the cart
  const isInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

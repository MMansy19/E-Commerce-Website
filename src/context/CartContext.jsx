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
  }, []); // Add any dependencies that should trigger the effect

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
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleIncrease = (item) => {
    if (item.quantity >= 0) {
      if (item.quantity === 0) {
        addToCart(item);
        item.quantity = 1;
      }
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1,
        };
        item.quantity += 1;
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      item.quantity = 0;
      removeFromCart(item.id);
    } else if (item.quantity > 1) {
      item.quantity -= 1;
      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[existingItemIndex].quantity > 1) {
          updatedCartItems[existingItemIndex] = {
            ...updatedCartItems[existingItemIndex],
            quantity: updatedCartItems[existingItemIndex].quantity - 1,
          };
        } else {
          updatedCartItems.splice(existingItemIndex, 1); // Remove item from cart if quantity is 1
        }
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
    }
  };

  // Function to move all items to cart with a quantity of 1 if they are not already in cart
  const moveAllToCart = (items) => {
    const itemsToMove = items.filter((item) => !isInCart(item.id));
    if (itemsToMove.length === 0) return false;

    const updatedCartItems = [
      ...cartItems,
      ...itemsToMove.map((item) => ({ ...item, quantity: 1 })),
    ];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    return true;
  };

  // Function to check if an item is in the cart
  const isInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        setCartItems,
        handleIncrease,
        handleDecrease,
        moveAllToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

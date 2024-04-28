/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";

const RemoveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="9" fill="#DB4444" />
    <path
      d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CartItem = ({ item }) => {
  const { removeFromCart, cartItems, setCartItems } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: quantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems)); // Update local storage
  }, [quantity]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-row justify-between items-center py-6 px-10 shadow rounded">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <IconButton
            onClick={handleRemove}
            className="absolute -top-2 right-0"
          >
            <RemoveIcon />
          </IconButton>
        </div>
        <img src={item.imageSrc} alt={item.title} className="w-16 h-16" />
        <div>
          <p className="text-base">{item.title}</p>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500">${item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          className="text-gray-400 border border-gray-300 rounded px-2 py-1 mr-2"
          onClick={handleDecrease}
        >
          -
        </button>
        <p className="text-gray-500">{quantity}</p>
        <button
          className="text-gray-400 border border-gray-300 rounded px-2 py-1 ml-2"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500">${item.price * quantity}</p>
      </div>
    </div>
  );
};
export default CartItem;

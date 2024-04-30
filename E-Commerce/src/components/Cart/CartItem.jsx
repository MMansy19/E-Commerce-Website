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
  }, [quantity, cartItems, item.id, setCartItems]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      item.quantity = quantity;
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    item.quantity = quantity;
  };

  return (
    <div className=" flex flex-row justify-between items-center py-6 pr-12 pl-4 shadow rounded gap-16 overflow-x-auto md:overflow-x-hidden">
      <div className="flex items-center gap-12 md:gap-4">
        <div className="flex ">
          <IconButton onClick={handleRemove} className="absolute -top-4">
            <RemoveIcon />
          </IconButton>
          <img src={item.imageSrc} alt={item.title} className="w-16 h-16" />
        </div>
        <div>
          <p className="text-xs md:text-base md:absolute">{item.title}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-gray-500">${item.price}</p>
      </div>
      <div className="flex items-center border-2 border-gray-300  rounded px-2 py-1  mr-2 gap-3">
        <p className="text-gray-500">{quantity}</p>

        <div className="flex flex-col items-center justify-center ">
          <button
            className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
            onClick={handleIncrease}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75732 7.36669L4.45732 10.6667L3.51465 9.72402L7.75732 5.48135L12 9.72402L11.0573 10.6667L7.75732 7.36669Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
            onClick={handleDecrease}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.24268 8.63331L11.5427 5.33331L12.4854 6.27598L8.24268 10.5186L4.00002 6.27598L4.94268 5.33331L8.24268 8.63331Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-gray-500">${item.price * quantity}</p>
      </div>
    </div>
  );
};
export default CartItem;

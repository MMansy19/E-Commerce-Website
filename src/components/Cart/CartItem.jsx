/* eslint-disable react/prop-types */

import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

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
  const { removeFromCart, handleIncrease, handleDecrease } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecreaseFunc = () => {
    handleDecrease(item);
  };

  const handleIncreaseFunc = () => {
    handleIncrease(item);
  };

  return (
    <div className=" flex flex-row justify-between items-center py-2 md:py-6 px-2 md:pr-12 md:pl-4 shadow rounded gap-4 md:gap-16  ">
      <div className="flex items-center md:gap-4">
        <div className="flex w-28">
          <IconButton onClick={handleRemove} className="absolute -top-4">
            <RemoveIcon />
          </IconButton>
          <Link to={{ pathname: `/allProducts/${item.title}` }} key={item.id}>
            <img
              loading="lazy"
              src={item.imageSrc}
              alt={item.title}
              className="w-16 h-16"
            />
          </Link>
        </div>
        <p className="hidden lg:flex text-xs md:text-base ">{item.title}</p>
      </div>
      <div className="flex items-center ">
        <p className="text-gray-500">${item.price}</p>
      </div>
      <div className="flex items-center border-2 border-gray-300  rounded px-2 py-1  mr-2 gap-3">
        <p className="text-gray-500">{quantity}</p>

        <div className="flex flex-col items-center justify-center ">
          <button
            className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
            onClick={handleIncreaseFunc}
          >
            +
          </button>
          <button
            className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
            onClick={handleDecreaseFunc}
          >
            -
          </button>
        </div>
      </div>
      <div className="items-center hidden md:flex">
        <p className="text-gray-500">${item.price * quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;

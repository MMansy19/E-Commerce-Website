/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SelectedProductContext } from "../../context/SelectedProductContext";
import { useCart } from "../../context/CartContext";
import { updateCartItemQuantity } from "../common/cartUtils";

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
  const { setSelectedProduct } = useContext(SelectedProductContext);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      const updatedCartItems = updateCartItemQuantity(
        cartItems,
        item.id,
        newQuantity
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    const updatedCartItems = updateCartItemQuantity(
      cartItems,
      item.id,
      newQuantity
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className=" flex flex-row justify-between items-center py-6 pr-12 pl-4 shadow rounded gap-16 overflow-x-auto md:overflow-x-hidden">
      <div className="flex items-center gap-12 md:gap-4">
        <div className="flex ">
          <IconButton onClick={handleRemove} className="absolute -top-4">
            <RemoveIcon />
          </IconButton>

          <Link
            to={{ pathname: `/product/${item.title}` }}
            key={item.id}
            onClick={() => handleProductClick(item)}
          >
            <img src={item.imageSrc} alt={item.title} className="w-16 h-16" />
          </Link>
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
            +
          </button>
          <button
            className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
            onClick={handleDecrease}
          >
            -
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

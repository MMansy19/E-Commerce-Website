import PropTypes from "prop-types";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const FlashSaleItem = ({ item }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setIsInCart(true);
  };

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded flex items-center justify-center bg-gray-200 w-72 h-60"
      >
        {isHovered && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 px-4 hover:bg-gray-800"
          >
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        )}
        {item.discount && (
          <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-3 m-2 rounded">
            -{item.discount}%
          </div>
        )}
        <img src={item.imageSrc} alt={item.title} />
      </div>
      <h3 className="text-lg font-base mt-4">{item.title}</h3>
      <p className="text-red-500 line-clamp-2">
        ${item.price}
        {item.discount && (
          <span className="ml-2 text-gray-400 line-through">
            ${item.price + (item.price * item.discount) / 100}
          </span>
        )}
      </p>
    </div>
  );
};

export default FlashSaleItem;

FlashSaleItem.propTypes = {
  item: PropTypes.object.isRequired,
};

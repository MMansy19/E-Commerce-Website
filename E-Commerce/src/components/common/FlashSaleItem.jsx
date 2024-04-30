/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const FlashSaleItem = ({ item }) => {
  const { addToCart, cartItems, removeFromCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const cartItemExists = cartItems.some(
      (cartItem) => cartItem.id === item.id
    );
    const wishlistItemExists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );
    setIsInCart(cartItemExists);
    setIsInWishlist(wishlistItemExists);
  }, [cartItems, wishlistItems, item.id]);

  // Function to add item to cart
  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(item.id);
      setIsInCart(false);
    } else {
      addToCart(item);
      setIsInCart(true);
    }
  };
  // Function to remove item from wishlist
  const handleDeleteFromWishlist = () => {
    removeFromWishlist(item.id);
    setIsInWishlist(false);
  };
  // Function to add item to wishlist
  const handleAddToWishlist = () => {
    addToWishlist(item);
    setIsInWishlist(true);
  };

  // Function to render stars
  const renderStars = () => {
    const stars = [];
    for (let i = -2; i < 3; i++) {
      // Determine star color based on index and item.stars
      const starColor = i < item.stars ? "#FFAD33" : "#D1D5DB"; // Orange if index < item.stars, gray otherwise
      stars.push(
        <svg
          key={i}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill={starColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative mx-2 ">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded flex items-center justify-center bg-zinc-100 w-[270px] h-60 transform transition-transform duration-300 hover:scale-105 focus:outline-none"
      >
        {isHovered && (
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-0 left-0 right-0 bg-black text-white py-2 px-4  duration-300  hover:bg-gray-800 focus:outline-none ${
              isInCart && "bg-red-500"
            }`}
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        )}
        {item.discount && (
          <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-3 m-2 rounded">
            -{item.discount}%
          </div>
        )}
        <Link to={{ pathname: "/product", state: { selectedProduct: item } }}>
          <img src={item.imageSrc} alt={item.title} />
        </Link>

        {isInWishlist ? (
          <div className="absolute top-3 right-3 bg-zinc-200 hover:bg-red-500 rounded-full">
            <IconButton onClick={handleDeleteFromWishlist} size="small">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3.57143H2.33333L3.66667 19H14.3333L15.6667 3.57143H1M9 7.42857V15.1429M12.3333 7.42857L11.6667 15.1429M5.66667 7.42857L6.33333 15.1429M6.33333 3.57143L7 1H11L11.6667 3.57143"
                  stroke="black"
                  strokeWidth="1.56"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-zinc-200 hover:bg-red-500 rounded-full">
            <IconButton onClick={handleAddToWishlist} size="small">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
          </div>
        )}
      </div>
      <h3 className="text-lg font-base mt-4">{item.title}</h3>
      <p className="text-red-500  text-sm font-semibold line-clamp-2">
        ${item.price}
        {item.discount && (
          <span className="ml-2 text-gray-500 text-sm font-semibold line-through">
            ${item.price + (item.price * item.discount) / 100}
          </span>
        )}
      </p>
      <span>
        <div className="flex mt-2 text-gray-500 text-sm font-semibold gap-2 items-center ">
          {renderStars()} <span>({item.rates})</span>
        </div>
      </span>
    </div>
  );
};

FlashSaleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    rates: PropTypes.number.isRequired,
    discount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  allItems: PropTypes.array.isRequired, // Pass all items array to check the status
};

export default FlashSaleItem;

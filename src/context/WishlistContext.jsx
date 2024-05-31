import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Initialize wishlist items from local storage on component mount
  useEffect(() => {
    const savedWishlistItems = JSON.parse(
      localStorage.getItem("wishlistItems")
    );
    if (savedWishlistItems) {
      setWishlistItems(savedWishlistItems);
    }
  }, []);

  const addToWishlist = (item) => {
    const updatedWishlistItems = [...wishlistItems, item];
    setWishlistItems(updatedWishlistItems);
    // Save Wishlist items to local storage
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(
      (item) => item.id !== itemId
    );
    setWishlistItems(updatedWishlistItems);
    // Save updated Wishlist items to local storage
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlistItems));
  };

  // Function to check if an item is in the wishlist
  const isInWishlist = (itemId) => {
    return wishlistItems.some((item) => item.id === itemId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

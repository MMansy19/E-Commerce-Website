import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
// import AddToCart from "../components/common/components/AddToCart";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import { ITEMS } from "../components/common/functions/items";
import RedTitle from "../components/common/components/RedTitle";
import WhiteButton from "../components/common/components/WhiteButton";

function Wishlist() {
  const { wishlistItems } = useWishlist();
  const { cartItems, setCartItems } = useCart();
  // const { handleAddToCart, isInCart } = AddToCart(); // Use AddToCart component to get handleAddToCart and isInCart

  // Get the type of items in the wishlist
  const wishlistTypes = new Set(wishlistItems.map((item) => item.type));

  // Filter ITEMS to get related items of the same type not in the wishlist
  const relatedItems = ITEMS.filter(
    (item) =>
      wishlistTypes.has(item.type) &&
      !wishlistItems.some((wish) => wish.id === item.id)
  );

  // Function to move all wishlist items to the cart
  const moveAllToCart = () => {
    console.log("Move All To Cart clicked");
    const itemsToAdd = relatedItems.filter(
      (item) => !cartItems.some((cartItem) => cartItem.id === item.id)
    );
    console.log("Items to add:", itemsToAdd);
    setCartItems([...cartItems, ...itemsToAdd]);
  };

  return (
    <div className="flex flex-col md:mx-32 mt-28">
      <div className="mx-auto md:mx-2 my-20">
        <div className="flex justify-around md:justify-between items-center md:mr-6 mb-12">
          <h2 className="text-lg">Wishlist ({wishlistItems.length})</h2>
          <WhiteButton name="Move All To Bag" onClick={moveAllToCart} />
        </div>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {wishlistItems.map((item, index) => (
            <Grid item key={item.id} xs={0} sm={6} md={4} lg={3}>
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={wishlistItems.length}
                stars={item.stars}
                rates={item.rates}
                isInWishlistPage={true}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <>
        <div className="flex justify-between items-center md:mr-6 mx-4 ">
          <RedTitle title="Just For You" color="black" />
          <Link to="/allProducts">
            <WhiteButton name="See All" />
          </Link>
        </div>
        <div className="relative mt-10">
          <div className="flex flex-row gap-2 md:gap-4 overflow-y-hidden  justify-center items-center md:h-[430px] transition-transform duration-300 transform  focus:outline-none ">
            {relatedItems.map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={relatedItems.length}
                stars={item.stars}
                rates={item.rates}
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default Wishlist;

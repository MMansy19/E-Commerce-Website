import FlashSaleItem from "../components/common/FlashSaleItem";
import { ITEMS } from "../assets/items";
import RedTitle from "../components/common/RedTitle";
import WhiteButton from "../components/common/WhiteButton";
import { useWishlist } from "../context/WishlistContext";
function Wishlist() {
  const { addToWishlist, wishlistItems } = useWishlist();
  return (
    <div className="flex flex-col md:mx-32  mt-28">
      <div className="mx-auto md:mx-2 my-20">
        <div className="flex justify-between items-center md:mr-6 md:mb-4">
          <h2 className="text-lg">Wishlist ({wishlistItems.length})</h2>
          <WhiteButton name="Move All To Bag" />
        </div>

        <div className="relative mt-10   flex flex-row gap-2 md:gap-12 overflow-x-hidden transition-transform duration-300 transform focus:outline-none">
          <div className="grid  md:grid-cols-4 gap-2 md:gap-12">
            {wishlistItems.map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={wishlistItems.length}
                stars={item.stars}
                rates={item.rates}
                isInWishlistPage={true}
              />
            ))}{" "}
          </div>
        </div>
      </div>
      <>
        <div className="flex justify-between items-center md:mr-6 mx-4 ">
          <RedTitle title="Just For You" color="black" />
          <WhiteButton name="See All" />
        </div>
        <div className="relative mt-10">
          <div className="flex flex-row gap-2 md:gap-4 overflow-x-hidden hover:overflow-x-auto   transition-transform duration-300 transform  focus:outline-none ">
            {ITEMS.slice(5, 10).map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={ITEMS.length}
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

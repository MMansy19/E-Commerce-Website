import { useEffect, useState, useContext } from "react";
import { SelectedProductContext } from "../context/SelectedProductContext";
import RelatedItems from "../components/Product/RelatedItems";
import ActiveLastBreadcrumb from "../components/common/Link";
import RedButton from "../components/common/RedButton";
import WishlistIcon from "../components/common/WishlistIcon";
import { useCart } from "../context/CartContext";
const Product = () => {
  const { handleIncrease, handleDecrease } = useCart();
  const { selectedProduct } = useContext(SelectedProductContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quantity, setQuantity] = useState(selectedProduct.quantity);

  useEffect(() => {
    setQuantity(selectedProduct.quantity);
  }, [selectedProduct.quantity]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // handleDecrease and handleIncrease remain the same

  const handleDecreaseFunc = () => {
    handleDecrease(selectedProduct); // Call handleDecrease with selectedProduct
  };

  const handleIncreaseFunc = () => {
    handleIncrease(selectedProduct); // Call handleIncrease with selectedProduct
  };

  const renderStars = () => {
    const stars = [];

    for (let i = -2; i < 3; i++) {
      const starColor = i < selectedProduct.stars ? "#FFAD33" : "#D1D5DB";
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
    <div className="flex flex-col md:mx-32 mt-48">
      {isLoaded && selectedProduct ? (
        <div className="mx-auto  flex flex-col gap-10">
          <ActiveLastBreadcrumb
            path={`Home/Product/${selectedProduct.title}`}
          />
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4">
                <div className="relative  flex items-center justify-center bg-zinc-100 w-[270px] rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.title}
                    className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full"
                  />
                </div>
                <div className="relative  flex items-center justify-center bg-zinc-100 w-[270px] rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.title}
                    className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                  />
                </div>
                <div className="relative  flex items-center justify-center bg-zinc-100 w-[270px] rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.title}
                    className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                  />
                </div>
                <div className="relative  flex items-center justify-center bg-zinc-100 w-[270px] rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.title}
                    className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                  />
                </div>
              </div>
              <div className="relative  flex items-center justify-center bg-zinc-100 w-[270px] rounded md:pt-12 md:p-8 md:h-[600px] md:w-[500px]">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                />
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-xl md:text-2xl font-bold ">
                {selectedProduct.title}
              </h2>
              <span>
                <div className="flex  text-gray-500 text-sm gap-2 items-center ">
                  {renderStars()}
                  <span>
                    ({selectedProduct.rates} Reviews)
                    <span className="mr-4 "></span>|
                    <span className="ml-4 text-green">In Stock</span>
                  </span>
                </div>
              </span>
              <p className="text-gray-800 text-2xl  font-inter">
                ${selectedProduct.price}.00
              </p>
              <p className="text-gray-800 w-[373px]">
                {selectedProduct.details}
              </p>
              <hr className="mx-30  border-gray-300" />
              <div className="font-inter text-xl">Colors: </div>
              <div className="font-inter text-xl flex gap-4">
                Size:
                <button className="border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm">
                  XS
                </button>
                <button className="border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm">
                  S
                </button>
                <button className="border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm">
                  M
                </button>
                <button className="border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm">
                  L
                </button>
                <button className="border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm">
                  XL
                </button>
              </div>

              <div className="font-inter text-xl flex gap-4">
                <div className="border-2 w-[160px] border-gray-400 rounded text-xl font-semibold flex justify-between items-center">
                  <button
                    onClick={handleDecreaseFunc}
                    className="border-r-2  hover:bg-red-500 hover:text-white border-gray-400 rounded p-3"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12H4"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  {quantity}
                  <button
                    onClick={handleIncreaseFunc}
                    className="border-l-2  hover:bg-red-500 hover:text-white border-gray-400 rounded p-3 "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 20V12M12 12V4M12 12H20M12 12H4"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <RedButton name="Buy Now" />
                <WishlistIcon selectedProduct={selectedProduct} />
              </div>
            </div>
          </div>
          <RelatedItems selectedProduct={selectedProduct} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default Product;

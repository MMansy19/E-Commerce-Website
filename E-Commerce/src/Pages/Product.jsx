import { useEffect, useState, useContext } from "react";
import { SelectedProductContext } from "../context/SelectedProductContext";
import RelatedItems from "../components/Product/RelatedItems";
import ActiveLastBreadcrumb from "../components/common/Link";
import RedButton from "../components/common/RedButton";
import WishlistIcon from "../components/common/WishlistIcon";
import { useCart } from "../context/CartContext";
import i18n from "../components/common/LangConfig";
import { Link } from "react-router-dom";

const Product = () => {
  const { selectedProduct } = useContext(SelectedProductContext);
  const { handleIncrease, handleDecrease } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(selectedProduct.quantity);
  }, [selectedProduct.quantity]);

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
    <div className="flex flex-col mx-4 md:mx-32 mt-48">
      <div className="mx-auto  flex flex-col gap-10">
        <ActiveLastBreadcrumb
          path={`${i18n.t("footer.myAccount")}/${selectedProduct.type}/${
            selectedProduct.title
          }`}
        />
        <div className="flex flex-col md:flex-row  gap-16">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="flex  flex-row md:flex-col gap-4">
              <div className="relative  flex items-center justify-center bg-zinc-100  rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full"
                />
              </div>
              <div className="relative  flex items-center justify-center bg-zinc-100  rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                />
              </div>
              <div className="relative  flex items-center justify-center bg-zinc-100  rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full"
                />
              </div>
              <div className="relative  flex items-center justify-center bg-zinc-100  rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full  "
                />
              </div>
            </div>
            <div className="relative  flex items-center justify-center bg-zinc-100 w-full rounded md:pt-12 md:p-8 md:h-[600px] md:w-[500px]">
              <img
                src={selectedProduct.imageSrc}
                alt={selectedProduct.title}
                className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full max-h-full "
              />
            </div>
          </div>
          <div className="flex gap-5 flex-col">
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
              <p className="text-gray-800 text-xl md:text-2xl font-inter">
                ${selectedProduct.price}.00
              </p>
              <p className="text-gray-800 w-full md:w-[373px] text-xs md:text-sm">
                {selectedProduct.details}
              </p>
            </div>
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

              {quantity === 0 ? (
                <RedButton name={i18n.t("redButtons.buyNow")} disabled={true} />
              ) : (
                <Link to="/checkout">
                  <RedButton name={i18n.t("redButtons.buyNow")} />
                </Link>
              )}

              <WishlistIcon selectedProduct={selectedProduct} />
            </div>
            <div className="border-2 border-gray-400 w-full h-44 flex flex-col py-6 mt-4 rounded">
              <div className="flex flex-row gap-4 justify-start items-center ml-4 mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_261_4843)">
                    <path
                      d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11.8182H11.6667"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.81836 15.4545H8.48503"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 19.0909H11.6667"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4843">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex flex-col gap-2 font-semibold">
                  <span className="text-base">Free Delivery</span>
                  <span className="text-xs underline">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>
              <hr className="mx-full border   border-gray-400" />
              <div className="flex flex-row gap-4 justify-start items-center ml-4 mt-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_261_4865)">
                    <path
                      d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_261_4865">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex flex-col gap-2 font-semibold">
                  <span className="text-base">Return Delivery</span>
                  <span className="text-xs">
                    Free 30 Days Delivery Returns.
                    <span className="underline ">Details</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedItems selectedProduct={selectedProduct} />
      </div>
    </div>
  );
};

export default Product;

import { useEffect, useState } from "react";
import RelatedItems from "../components/Product/RelatedItems";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import RedButton from "../components/common/components/RedButton";
import WishlistIcon from "../components/common/components/WishlistIcon";
import { useCart } from "../context/CartContext";
import i18n from "../components/common/components/LangConfig";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import RatingComp from "../components/common/components/Rating";
import { ITEMS } from "../components/common/functions/items";
import NotFound from "./NotFound";
const Product = () => {
  const { handleIncrease, handleDecrease } = useCart();
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size
  let { title } = useParams();

  const selectedProduct = ITEMS.find((item) => item.title === title);

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(selectedProduct.quantity);
    }
  }, [selectedProduct]);

  const handleDecreaseFunc = () => {
    handleDecrease(selectedProduct);
    setQuantity(selectedProduct.quantity);
  };

  const handleIncreaseFunc = () => {
    handleIncrease(selectedProduct);
    setQuantity(selectedProduct.quantity);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
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

  // Function to handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsImageFullScreen(!isImageFullScreen);
  };
  return (
    <>
      {selectedProduct ? (
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
                  {[...Array(4)].map((_, index) => (
                    <motion.div
                      role="button"
                      key={index}
                      className="relative flex items-center justify-center bg-zinc-100 rounded md:pt-12 md:p-8 md:h-[138px] md:w-[170px]"
                      onClick={handleImageClick}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <img
                        src={selectedProduct.imageSrc}
                        alt={selectedProduct.title}
                        className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
                {/* Main image */}
                {/* <button> */}
                <motion.div
                  role="button"
                  className="relative flex items-center justify-center bg-zinc-100 w-full rounded md:pt-12 md:p-8 md:h-[600px] md:w-[500px]"
                  onClick={handleImageClick}
                >
                  <img
                    src={selectedProduct.imageSrc}
                    alt={selectedProduct.title}
                    className="transform transition-transform duration-300 hover:scale-105 focus:outline-none w-full max-h-full"
                  />
                </motion.div>
                {/* </button> */}
              </div>
              <div className="flex gap-5 flex-col">
                <div className="flex gap-4 flex-col">
                  <h2 className="text-xl md:text-2xl font-bold ">
                    {selectedProduct.title}
                  </h2>
                  <div className="flex  text-gray-500 text-sm gap-2 items-center ">
                    {renderStars()}
                    <span>
                      ({selectedProduct.rates} {i18n.t("productPage.reviews")})
                      <span className="mr-4 "></span>|{" "}
                      <span className="ml-4 text-green">
                        {i18n.t("productPage.inStock")}
                      </span>
                    </span>
                  </div>
                  <div className="flex gap-10">
                    <p className="text-gray-800 text-xl md:text-2xl font-inter">
                      ${selectedProduct.price}.00
                    </p>
                    <RatingComp
                      text={i18n.t("productPage.review")}
                      item={selectedProduct}
                    />{" "}
                  </div>
                  <p className="text-gray-800 w-full md:w-[373px] text-xs md:text-sm">
                    {selectedProduct.details}
                  </p>
                </div>
                <hr className="mx-30  border-gray-300" />
                <div className="font-inter text-xl">
                  {i18n.t("productPage.colors")}:{" "}
                </div>
                <div className="font-inter text-xl flex gap-4">
                  {i18n.t("productPage.size")}
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`border-2 w-8 h-8 hover:bg-red-400 hover:text-white border-gray-400 rounded text-sm ${
                        selectedSize === size ? "bg-red-600 text-white" : ""
                      }`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
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
                    <RedButton
                      name={i18n.t("redButtons.buyNow")}
                      disabled={true}
                    />
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
                      {/* Delivery icon */}
                    </svg>
                    <div className="flex flex-col gap-2 font-semibold">
                      <span className="text-base">
                        {i18n.t("productPage.1")}
                      </span>
                      <span className="text-xs underline">
                        {i18n.t("productPage.1.1")}
                      </span>
                    </div>
                  </div>
                  <hr className="mx-full border border-gray-400" />
                  <div className="flex flex-row gap-4 justify-start items-center ml-4 mt-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Return icon */}
                    </svg>
                    <div className="flex flex-col gap-2 font-semibold">
                      <span className="text-base">
                        {i18n.t("productPage.2")}
                      </span>
                      <span className="text-xs">
                        {i18n.t("productPage.2.1")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RelatedItems selectedProduct={selectedProduct} />
          </div>
          <AnimatePresence>
            {isImageFullScreen && (
              <motion.div
                className="backdrop-blur-sm fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={handleImageClick}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: "100vw", height: "100vh" }} // Set full-screen width and height
              >
                <motion.img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.title}
                  className="w-full h-auto max-h-[50vh] md:max-w-[50vw]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Product;

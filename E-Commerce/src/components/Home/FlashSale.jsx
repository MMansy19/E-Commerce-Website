import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import RedTitle from "../common/RedTitle";
import Arrows from "../common/Arrows";
import ViewAll from "../common/ViewAll";
import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/LangConfig";
import { motion } from "framer-motion"; // Import motion from Framer Motion for animations

const FlashSale = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2024-05-27T00:00:00"))
  );

  const saleItems = items.filter((item) => item.discount !== "");
  const handleNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date("2024-05-27T00:00:00")));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="py-12 px-4">
        <RedTitle title={i18n.t("homeSections.row2.0")} />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <div className="flex gap-20 flex-col md:flex-row ">
            <h2 className="text-2xl md:text-3xl font-semibold ">
              {i18n.t("homeSections.row2.1")}
            </h2>
            <div className="font-inter font-bold text-2xl md:text-3xl relative">
              <span className="absolute text-xs font-poppins bottom-full left-0.5">
                {i18n.t("homeSections.row2.2")}
              </span>
              <span>{timeLeft.days}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-1/4">
                {i18n.t("homeSections.row2.3")}
              </span>
              <span>{timeLeft.hours}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-1/2">
                {i18n.t("homeSections.row2.4")}
              </span>
              <span>{timeLeft.minutes}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-3/4">
                {i18n.t("homeSections.row2.5")}
              </span>
              <span>{timeLeft.seconds}</span>
            </div>
          </div>
          <Arrows
            handlePrevItem={handlePrevItem}
            handleNextItem={handleNextItem}
          />
        </div>
        {/* Motion */}
        <div className="relative  overflow-x-auto snap-x snap-mandatory scroll-mt-4 scroll-mr-4 scroll-ml-4 scroll-padding-4 flex justify-center items-center h-[400px] ">
          <motion.div
            className="flex gap-2 md:gap-12"
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 200 }} // Adjust the value for smoother animation
            transition={{ type: "spring", stiffness: 300, damping: 30 }} // Adjust spring animation parameters for smoother swiping
          >
            {saleItems.map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }} // Increase scale on hover for larger image preview
              >
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={saleItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Motion */}
      </div>
      <div className="mt-8 flex justify-center">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </>
  );
};

FlashSale.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FlashSale;

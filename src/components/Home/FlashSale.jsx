import FlashSaleItem from "../common/components/FlashSaleItem";
import { useState, useEffect } from "react";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { ITEMS } from "../common/functions/items";

// Add 24 hours to the current time to calculate the deadline
const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);


const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(tomorrow)
  );
  const saleItems = ITEMS.filter((item) => item.discount !== "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className=" p-4 ">
      <RedTitle title={i18n.t("homeSections.row2.0")} />
      <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row ">
          <h2 className="text-2xl md:text-3xl font-semibold ">
            {i18n.t("homeSections.row2.1")}
          </h2>
          <div className="font-inter font-bold text-2xl md:text-3xl relative">
            <span className="absolute text-xs font-poppins bottom-full left-0.5">
              {i18n.t("homeSections.row2.2")}
            </span>
            <span>{timeLeft.days}</span>
            <span className="text-red-400 mx-4">:</span>
            <span className="absolute text-xs font-poppins bottom-full left-1/5">
              {i18n.t("homeSections.row2.3")}
            </span>
            <span>{timeLeft.hours}</span>
            <span className="text-red-400 mx-4">:</span>
            <span className="absolute text-xs font-poppins bottom-full">
              {i18n.t("homeSections.row2.4")}
            </span>
            <span>{timeLeft.minutes}</span>
            <span className="text-red-400 mx-4">:</span>
            <span className="absolute text-xs font-poppins bottom-full left-full">
              {i18n.t("homeSections.row2.5")}
            </span>
            <span className="absolute ">{timeLeft.seconds}</span>
          </div>
        </div>
        <Arrows />
      </div>

      <div className="scrollbar relative  md:overflow-x-hidden hover:overflow-scroll  overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px] ">
        {saleItems.map((item, index) => (
          <FlashSaleItem
            key={item.id}
            item={item}
            index={index}
            totalItems={saleItems.length}
            stars={item.stars}
            rates={item.rates}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </div>
  );
};

export default FlashSale;

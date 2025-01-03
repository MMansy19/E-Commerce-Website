import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";

// Add 24 hours to the current time to calculate the deadline
const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(tomorrow)
  );

  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.15.title")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className=" flex gap-10 md:my-10 mt-10 items-center justify-center flex-col-reverse md:flex-row  min-h-[500px] bg-black text-white">
      <div className="flex flex-col gap-5 items-center md:items-start  md:mx-12">
        <h3 className="text-green text-sm">{i18n.t("deal.greenTitle")}</h3>
        <h2 className="xl:w-[500px] text-center md:text-start text-2xl sm:text-3xl lg:text-5xl font-semibold font-inter">
          {i18n.t("deal.title")}
        </h2>
        <div className="font-semibold text-base flex flex-row gap-6 text-black">
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.days}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              {i18n.t("deal.days")}
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.hours}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              {i18n.t("deal.hours")}
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.minutes}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              {i18n.t("deal.minutes")}
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.seconds}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              {i18n.t("deal.seconds")}
            </span>
          </div>
        </div>
        <Link
          to={{ pathname: `/allProducts/${dealItem.title}` }}
          key={dealItem.id}
        >
          <button className="bg-green   mb-8 py-4 px-12 rounded  ease-in-out  duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span> {i18n.t("deal.buyNow")}</span>
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <Link
          to={{ pathname: `/allProducts/${dealItem.title}` }}
          key={dealItem.id}
        >
          <img
            src={dealItem.imageSrc}
            alt={dealItem.title}
            loading="lazy"
            className="transition-transform duration-300 transform hover:-translate-y-4 hover:scale-110 hover:motion-safe:animate-pulse"
          />
        </Link>
      </div>
    </div>
  );
};

export default Deal;

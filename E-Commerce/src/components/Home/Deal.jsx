import { useState, useEffect } from "react";
import calculateTimeLeft from "../common/calculateTimeLeft";
import dealImage from "../../assets/custom/JBL_BOOMBOX.svg";
import i18n from "../common/LangConfig";

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(new Date("2024-05-27T00:00:00"))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date("2024-05-27T00:00:00")));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className=" flex gap-10 md:my-10 items-center justify-center flex-col-reverse md:flex-row  min-h-[500px] bg-black text-white">
      <div className="flex flex-col gap-5 items-center md:items-start  md:mx-12">
        <h3 className="text-green text-sm">{i18n.t("deal.greenTitle")}</h3>
        <h2 className="md:w-[500px] text-center md:text-start text-xl md:text-5xl font-semibold font-inter">
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
        <button className="bg-green  mb-8 py-4 px-12 rounded  ease-in-out  duration-300 transform hover:scale-105">
          <span> {i18n.t("deal.buyNow")}</span>
        </button>
      </div>
      <div className="mt-4 transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
        <img src={dealImage} alt="JBL_BOOMBOX" />
      </div>
    </div>
  );
};

export default Deal;

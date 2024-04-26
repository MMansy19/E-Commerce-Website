import { useState, useEffect } from "react";
import calculateTimeLeft from "../common/calculateTimeLeft";
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
    <div className="flex md:my-10 items-center justify-around flex-col-reverse md:flex-row  min-h-[500px] bg-black text-white">
      <div className="flex flex-col gap-5 items-center md:items-start  md:mx-12">
        <h3 className="text-green-400 text-sm">Categories</h3>
        <h2 className="w-[500px] text-2xl md:text-5xl font-semibold font-inter">
          Enhance Your Listening Experience
        </h2>
        <div className="font-semibold text-base flex flex-row gap-6 text-black">
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.days}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              Days
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.hours}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              Hours
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.minutes}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              Minutes
            </span>
          </div>
          <div className="flex flex-col  items-center justify-center py-3 bg-white rounded-full">
            <span>{timeLeft.seconds}</span>
            <span className=" font-light text-xs w-[62px] text-center">
              Seconds
            </span>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-400 mb-8 py-4 px-12 rounded  ease-in-out  duration-300 transform hover:scale-105">
          <span>Buy Now!</span>
        </button>
      </div>
      <div className="mt-4 transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
        <img src="../../src/assets/custom/JBL_BOOMBOX.svg" alt="JBL_BOOMBOX" />
      </div>
    </div>
  );
};

export default Deal;

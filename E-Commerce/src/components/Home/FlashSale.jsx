import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import RedTitle from "../common/RedTitle";
import Arrows from "../common/Arrows";
import RedButton from "../common/RedButton";
const FlashSale = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate time left until sale ends
  function calculateTimeLeft() {
    const deadline = new Date("2024-05-27T00:00:00"); // Set your deadline date here
    const difference = +deadline - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  // Function to handle next item navigation
  const handleNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Function to handle previous item navigation
  const handlePrevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="py-12 md:ml-32 px-4">
        <RedTitle title="Today’s" />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <div className="flex gap-20 flex-col md:flex-row ">
            <h2 className="text-2xl md:text-3xl font-semibold ">Flash Sales</h2>
            <div className="font-inter font-bold text-2xl md:text-3xl">
              <span className=" absolute text-xs font-poppins bottom-10 ">
                Days
              </span>
              <span> {timeLeft.days}</span>
              <span className="text-red-400  mx-4">:</span>
              <span className=" absolute text-xs font-poppins bottom-10">
                Hours
              </span>
              <span>{timeLeft.hours}</span>
              <span className="text-red-400  mx-4">:</span>
              <span className=" absolute text-xs font-poppins bottom-10">
                Minutes
              </span>
              <span>{timeLeft.minutes}</span>
              <span className="text-red-400  mx-4">:</span>
              <span className=" absolute text-xs font-poppins bottom-10">
                Seconds
              </span>
              <span> {timeLeft.seconds}</span>
            </div>
          </div>
          <Arrows
            handlePrevItem={handlePrevItem}
            handleNextItem={handleNextItem}
          />
        </div>
        <div className="relative mt-10 ">
          <div className="flex flex-row gap-2 md:gap-12  overflow-x-hidden hover:overflow-x-auto transition-transform duration-300 transform  focus:outline-none ">
            {items.slice(currentIndex, currentIndex + 5).map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={items.length}
                stars={item.stars}
                rates={item.rates}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <RedButton name="View All Products" />
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </>
  );
};

FlashSale.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FlashSale;

// items.map((item, index) => (
//   <FlashSaleItem
//     key={item.title}
//     item={item}
//     index={index}
//     totalItems={items.length}
//   />
// ));

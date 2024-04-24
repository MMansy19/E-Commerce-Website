import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import RedTitle from "../common/RedTitle";
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
    <div className="py-12 md:ml-32 px-4">
      <RedTitle title="Today’s" />
      <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
        <div className="flex gap-20 flex-col md:flex-row ">
          <h2 className="text-3xl font-semibold ">Flash Sales</h2>
          <div className="font-inter font-bold text-3xl">
            <span className=" absolute text-sm">Days</span>
            {timeLeft.days} <span className="text-red-500">:</span>{" "}
            <span className=" absolute text-sm">Hours</span>
            {timeLeft.hours} <span className="text-red-500">:</span>{" "}
            <span className=" absolute text-sm">Minutes</span>
            {timeLeft.minutes} <span className="text-red-500">:</span>{" "}
            <span className=" absolute text-sm">Seconds</span>
            {timeLeft.seconds}
          </div>
        </div>
        <div className="absolute right-4 md:flex gap-2">
          <button
            onClick={handlePrevItem}
            className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L1 8L8 15M1 8H17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNextItem}
            className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none"
          >
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8H18M18 8L11 1M18 8L11 15"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-row gap-2 md:gap-8 overflow-x-auto">
          {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
            <FlashSaleItem
              key={item.title}
              item={item}
              index={index}
              totalItems={items.length}
            />
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500">
          View All Products
        </button>
      </div>
    </div>
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

import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import { useState } from "react";
import RedTitle from "../common/RedTitle";
import RedButton from "../common/RedButton";

const BestSelling = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="py-12 md:ml-32 px-4">
        <RedTitle title="This Month" />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold ">
            Best Selling Products
          </h2>
          <RedButton name="View All" />
          <div className="mb:24 absolute right-8 md:right-24"></div>
        </div>
        <div className="relative mt-10 ">
          <div className="flex flex-row gap-2 md:gap-12 overflow-x-hidden hover:overflow-x-auto transition-transform duration-300 transform  focus:outline-none ">
            {items.slice(currentIndex, items.length - 4).map((item, index) => (
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
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </>
  );
};

BestSelling.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BestSelling;

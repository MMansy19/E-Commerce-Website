import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import RedTitle from "../common/RedTitle";
import RedButton from "../common/RedButton";

const BestSelling = ({ items }) => {
  return (
    <>
      <div className="mx-2">
        <RedTitle title="This Month" />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <h2 className="text-lg  md:text-3xl font-semibold ">
            Best Selling Products
          </h2>
          <RedButton name="View All" />
          <div className="mb:24 absolute right-8 md:right-24"></div>
        </div>
        <div className="relative mt-10">
          <div className="flex flex-row gap-2 md:gap-8 overflow-x-hidden hover:overflow-x-auto md:hover:overflow-x-hidden  transition-transform duration-300 transform  focus:outline-none ">
            {items.slice(0, 4).map((item, index) => (
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

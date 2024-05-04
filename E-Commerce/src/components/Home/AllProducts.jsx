import FlashSaleItem from "../common/FlashSaleItem";
import PropTypes from "prop-types";
import RedTitle from "../common/RedTitle";
import Arrows from "../common/Arrows";
import ViewAll from "../common/ViewAll";
import i18n from "../common/LangConfig";

const AllProducts = ({ items }) => {
  return (
    <>
      <div className="py-12">
        <RedTitle title={i18n.t("allProducts.redTitle")} />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <div className="flex gap-20 flex-col md:flex-row ">
            <h2 className="text-2xl md:text-3xl font-semibold ">
              {i18n.t("allProducts.title")}
            </h2>
          </div>
          <Arrows />
        </div>
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 overflow-x-hidden transition-transform duration-300 transform focus:outline-none">
          <div className="grid grid-rows-2 mx-auto md:grid-cols-4 gap-2 md:gap-12">
            {items.slice(0, 8).map((item, index) => (
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
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

AllProducts.propTypes = {
  items: PropTypes.array.isRequired,
};

export default AllProducts;

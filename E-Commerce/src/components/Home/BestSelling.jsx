import FlashSaleItem from "../common/components/FlashSaleItem";
import PropTypes from "prop-types";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import i18n from "../common/components/LangConfig";

const BestSelling = ({ items }) => {
  const sortedItems = items.sort(
    (a, b) => parseFloat(b.rates) - parseFloat(a.rates)
  );
  const BestItems = sortedItems.slice(0, 4);
  return (
    <>
      <div className="mx-2">
        <RedTitle title={i18n.t("bestSelling.redTitle")} />

        <div className="flex justify-between items-center md:mr-6 md:mb-4">
          <h2 className="text-lg  md:text-3xl font-semibold ">
            {i18n.t("bestSelling.title")}
          </h2>
          <ViewAll name={i18n.t("redButtons.viewAll")} />
        </div>
        <div className="relative mt-10">
          <div className="flex flex-row gap-2 md:gap-8 overflow-x-hidden hover:overflow-x-auto xl:hover:overflow-x-hidden  transition-transform duration-300 transform  focus:outline-none ">
            {BestItems.slice(0, 4).map((item, index) => (
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

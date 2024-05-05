import { ITEMS } from "../assets/items";
import FlashSaleItem from "../components/common/FlashSaleItem";
import i18n from "../components/common/LangConfig";
const AllProducts = () => {
  const filteredItems = ITEMS.filter((item) => item.type !== "electronics");

  return (
    <div className=" mt-36 md:mt-48 ">
      <h1 className="text-4xl font-bold text-center mb-10">
        {i18n.t("allProducts.title")}
      </h1>
      <div className="relative flex flex-row gap-2 md:gap-12 overflow-x-hidden transition-transform duration-300 transform focus:outline-none">
        <div className="grid grid-rows-2 mx-auto md:grid-cols-4 gap-2 md:gap-12">
          {filteredItems.map((item, index) => (
            <FlashSaleItem
              key={item.id}
              item={item}
              index={index}
              totalItems={filteredItems.length}
              stars={item.stars}
              rates={item.rates}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

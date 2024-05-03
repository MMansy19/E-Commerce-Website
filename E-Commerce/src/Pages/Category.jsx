import { useParams } from "react-router-dom";
import { ITEMS } from "../components/common/items";
import FlashSaleItem from "../components/common/FlashSaleItem";

const CategoryPage = () => {
  const { category } = useParams();
  const filteredItems = ITEMS.filter((item) => item.type === category);

  return (
    <div className="relative mt-10 flex flex-row gap-2 md:gap-12 overflow-x-hidden transition-transform duration-300 transform focus:outline-none">
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
  );
};

export default CategoryPage;

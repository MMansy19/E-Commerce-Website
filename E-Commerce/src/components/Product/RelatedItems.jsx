/* eslint-disable react/prop-types */
import FlashSaleItem from "../common/FlashSaleItem";
import RedTitle from "../common/RedTitle";
import RedButton from "../common/RedButton";
import { ITEMS } from "../common/items";
const RelatedItems = ({ selectedProduct }) => {
  const relatedItems = ITEMS.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  );

  return (
    <>
      <div className="mx-auto md:mx-2">
        <RedTitle title="Related Items" />
        <div className="relative mt-10">
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 overflow-x-hidden hover:overflow-x-auto md:hover:overflow-x-hidden  transition-transform duration-300 transform  focus:outline-none ">
            {relatedItems.map((item, index) => (
              <FlashSaleItem
                key={item.title}
                item={item}
                index={index}
                totalItems={relatedItems.length}
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
    </>
  );
};

export default RelatedItems;

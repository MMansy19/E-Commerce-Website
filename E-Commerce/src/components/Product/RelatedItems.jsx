/* eslint-disable react/prop-types */
import i18n from "../common/components/LangConfig";
import FlashSaleItem from "../common/components/FlashSaleItem";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import { ITEMS } from "../common/functions/items";
const RelatedItems = ({ selectedProduct }) => {
  const relatedItems = ITEMS.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  );

  return (
    <>
      <div className="mx-auto md:mx-2">
        <RedTitle title="Related Items" />
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 overflow-x-hidden transition-transform duration-300 transform focus:outline-none">
          <div className="grid grid-rows-2 mx-auto md:grid-cols-4 gap-2 md:gap-12">
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
        <ViewAll name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

export default RelatedItems;

/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { SelectedProductContext } from "../../context/SelectedProductContext";

const CheckoutCartItem = ({ item }) => {
  const { setSelectedProduct } = useContext(SelectedProductContext);
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const handleProductClick = () => {
    setSelectedProduct(item);
  };

  return (
    <div className=" flex flex-row justify-between items-center ">
      <div className="flex items-center gap-6 ">
        <div className="flex ">
          <Link
            to={{ pathname: `/${item.title}` }}
            key={item.id}
            onClick={() => handleProductClick()}
          >
            <img src={item.imageSrc} alt={item.title} className="w-14 h-14  " />
          </Link>
        </div>
        <div>
          <p className="text-xs md:text-base md:absolute">{item.title}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <p className="text-gray-500">
          ${item.price}
          {quantity >= 1 ? ` x ${quantity}` : ""}
        </p>
      </div>
    </div>
  );
};

export default CheckoutCartItem;

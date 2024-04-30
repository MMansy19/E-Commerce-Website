import { createContext, useState } from "react";

const SelectedProductContext = createContext();
const InitialProduct = {
  id: "1",
  imageSrc: "./assets/car.svg",
  title: "Kids Electric Car",
  price: 960,
  stars: Math.floor(Math.random() * 5),
  rates: Math.floor(Math.random() * 100),
  discount: "",
  quantity: 1,
};
import PropTypes from "prop-types";

const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(InitialProduct);

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
};

SelectedProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SelectedProductContext, SelectedProductProvider };

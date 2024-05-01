import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const SelectedProductContext = createContext();

const SelectedProductProvider = ({ children }) => {
  // Initialize state with the value from local storage if it exists
  const [selectedProduct, setSelectedProduct] = useState(() => {
    const storedProduct = localStorage.getItem("selectedProduct");
    return storedProduct && JSON.parse(storedProduct);
  });

  // Update local storage whenever selectedProduct changes
  useEffect(() => {
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
  }, [selectedProduct]);

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

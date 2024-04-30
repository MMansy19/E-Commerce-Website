/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
// import { SelectedProductContext } from "../context/SelectedProductContext";

const Product = ({ selectedProduct }) => {
  // const { selectedProduct } = useContext(SelectedProductContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto my-10 px-4">
      {isLoaded ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={selectedProduct.imageSrc}
              alt={selectedProduct.title}
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">{selectedProduct.title}</h2>
            <p className="text-gray-600 text-lg mb-4">
              ${selectedProduct.price}
            </p>
            <p className="text-gray-700">{selectedProduct.description}</p>
            {/* Additional details */}
            <ul className="mt-4">
              <li className="mb-2">
                <span className="font-semibold">Stars:</span>{" "}
                {Array.from({ length: selectedProduct.stars }, (_, index) => (
                  <svg
                    key={index}
                    className="inline w-6 h-6 text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10l-1.146-2.292A1 1 0 0 0 10 7H6a1 1 0 0 0-.854 1.516L7.542 12l-2.396 3.484A1 1 0 0 0 6 17h4a1 1 0 0 0 .854-.484L12 14l2.146 3.516A1 1 0 0 0 16 17h4a1 1 0 0 0 .854-1.516L16.458 12l2.396-3.484A1 1 0 0 0 20 7h-4a1 1 0 0 0-.854.484L12 10z"
                    />
                  </svg>
                ))}
              </li>
              <li className="mb-2">
                <span className="font-semibold">Rates:</span>{" "}
                {selectedProduct.rates}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  );
};

export default Product;

import { useState } from "react";

const Modal = ({ showModal, modalImage, closeModal }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {showModal && (
        <div className="backdrop-blur-sm fixed top-0 left-0 w-full  h-full flex items-center justify-center z-50">
          <div
            className="bg-white  rounded-md shadow-lg overflow-hidden transition-opacity duration-300"
            style={{ opacity: showModal ? 1 : 0 }}
          >
            <img
              src={modalImage}
              alt="Modal"
              //   className="min-w-[300px] md:min-w-[450px] max-h-[700px] w-full h-auto"
              className={`min-w-[300px] md:min-w-[450px] w-full h-auto rounded-t-md transition-transform duration-300 ${
                isZoomed ? "transform scale-150" : ""
              }`}
              style={{ maxHeight: "80vh", cursor: "zoom-in" }}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            />

            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              Close
            </button>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={closeModal}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;

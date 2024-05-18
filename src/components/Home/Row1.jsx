import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import apple from "./apple.png";

const Row1 = () => {
  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );

  return (
    <div className="flex flex-row ">
      {/* Left Sidebar */}
      <div className=" text-gray-700 w-64 flex-shrink-0 hidden xl:block">
        <nav className="py-6">
          <ul>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.0")}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.1")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.2")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.3")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.4")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.5")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.6")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.7")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.8")}{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Vertical Line */}
      <div className="border-l border-gray-300 hidden xl:block"></div>

      {/* Main Content */}
      <div
        className="flex xl:my-10 xl:ml-10 xl:gap-16 items-center jusify-between flex-col-reverse 
      md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
          <div className="max-w-72 flex jusify-center items-center gap-6">
            <img src={apple} alt="apple" />
            <h1 className="text-lg">{i18n.t("homeSections.row1.col2.0")}</h1>
          </div>
          <h2 className="text-2xl md:text-5xl leading-10">
            {i18n.t("homeSections.row1.col2.1")}
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <span>{i18n.t("homeSections.row1.col2.2")}</span>
              <svg
                className="mt-1 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" relative overflow-hidden mt-4 ">
          <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
            <Link to="/allProducts">
              <img
                src={dealItem.imageSrc}
                alt={dealItem.title}
                loading="lazy"
                className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;

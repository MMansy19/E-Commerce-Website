import RedTitle from "../common/RedTitle";
import i18n from "../common/LangConfig";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SelectedProductContext } from "../../context/SelectedProductContext";
import { ITEMS } from "../../assets/items";

const Featured = () => {
  const { setSelectedProduct } = useContext(SelectedProductContext);
  const handleProductClick = (itemClicked) => {
    setSelectedProduct(itemClicked);
  };

  const playstationItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.18.title")
  );
  const womenCollectionsItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.20.title")
  );
  const speakersItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.19.title")
  );
  const perfumesItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.16.title")
  );

  return (
    <div className="flex flex-col my-36">
      <RedTitle title={i18n.t("featured.redTitle")} />
      <h2 className="text-2xl md:text-3xl font-semibold mb-14">
        {i18n.t("featured.title")}
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-black rounded md:pt-12 md:px-8 md:h-[600px] md:w-[570px]">
          <div className=" text-white relative flex gap-10  md:mt-10 items-center justify-center flex-col-reverse md:flex-row md:w-[511px] md:h-[511px] sm:h-[500px] h-[380px]">
            <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover">
              <Link
                to={{ pathname: `/${playstationItem.title}` }}
                onClick={() => handleProductClick()}
                key={playstationItem.id}
              >
                <img
                  className="w-full h-full transition-transform duration-300 transform  hover:-translate-y-4  hover:scale-101 hover:motion-safe:animate-pulse opacity-50 hover:opacity-100"
                  src={playstationItem.imageSrc}
                  alt={playstationItem.title}
                />
              </Link>
            </div>
            <div className="flex transform flex-col gap-4 mt-auto mr-auto w-[270px] mb-8  items-center md:items-start justify-end">
              <h2 className=" text-center md:text-start text-lg md:text-2xl font-semibold font-inter">
                {i18n.t("featured.playStation.title")}
              </h2>
              <p className=" text-center md:text-start text-sm ">
                {i18n.t("featured.playStation.description")}
              </p>
              <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2  focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
                <span> {i18n.t("featured.shopNow")}</span>
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
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-black rounded md:h-[284px] md:w-[570px]">
            <div className="text-white relative flex items-center justify-center flex-col-reverse md:flex-row w-full h-full">
              <div className="overflow-hidden absolute bg-no-repeat bg-center bg-cover transition-transform duration-300 transform hover:scale-105 p-10">
                <Link
                  to={{ pathname: `/${womenCollectionsItem.title}` }}
                  onClick={() => handleProductClick()}
                  key={womenCollectionsItem.id}
                >
                  <img
                    className="w-full h-full transition-transform duration-300 transform  hover:-translate-y-1 hover:scale-102 hover:motion-safe:animate-pulse object-cover opacity-50 hover:opacity-100"
                    src={womenCollectionsItem.imageSrc}
                    alt={womenCollectionsItem.title}
                  />
                </Link>
              </div>
              <div className="flex transform flex-col gap-4 mt-auto mr-auto pl-5 w-[270px]">
                <h2 className="text-center md:text-start text-lg md:text-2xl font-semibold font-inter">
                  {i18n.t("featured.WomenCollections.title")}
                </h2>
                <p className="text-center md:text-start text-sm">
                  {i18n.t("featured.WomenCollections.description")}
                </p>
                <button className="mb-6 md:mb-0 flex gap-2 underline underline-offset-8 py-2 focus:underline-offset-2 ease-in-out duration-300 transform hover:translate-x-4">
                  <span>{i18n.t("featured.shopNow")}</span>
                  <svg
                    className="mt-1"
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
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-black rounded md:px-6 md:h-[284px] md:w-[270px]">
              <div className=" text-white relative flex gap-10  md:mt-10 items-center justify-center flex-col-reverse md:flex-row  md:h-[221px] ">
                <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-transform duration-300 transform hover:scale-105">
                  <Link
                    to={{ pathname: `/${speakersItem.title}` }}
                    onClick={() => handleProductClick()}
                    key={speakersItem.id}
                  >
                    <img
                      className="w-full h-full transition-transform duration-300 transform  hover:-translate-y-1 hover:scale-102 hover:motion-safe:animate-pulse object-cover opacity-50 hover:opacity-100"
                      src={speakersItem.imageSrc}
                      alt={speakersItem.title}
                    />
                  </Link>
                </div>
                <div className="flex transform flex-col gap-2 md:mt-auto mr-auto w-[270px]  items-center md:items-start justify-end">
                  <h2 className=" text-center md:text-start text-lg md:text-2xl font-semibold font-inter">
                    {i18n.t("featured.speakers.title")}
                  </h2>
                  <p className=" text-center md:text-start text-sm ">
                    {i18n.t("featured.speakers.description")}
                  </p>
                  <button className="mb-6 md:mb-0 flex gap-2 underline underline-offset-8 py-2  focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
                    <span> {i18n.t("featured.shopNow")}</span>
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
                </div>
              </div>
            </div>{" "}
            <div className="bg-black rounded  md:px-6 md:h-[284px] md:w-[270px]">
              <div className=" text-white relative flex gap-10  md:mt-10 items-center justify-center flex-col-reverse md:flex-row  md:h-[221px]">
                <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-transform duration-300 transform hover:scale-105">
                  <Link
                    to={{ pathname: `/${perfumesItem.title}` }}
                    onClick={() => handleProductClick()}
                    key={perfumesItem.id}
                  >
                    <img
                      className="w-full h-full transition-transform duration-300 transform  hover:-translate-y-1 hover:scale-102 hover:motion-safe:animate-pulse object-cover opacity-50 hover:opacity-100"
                      src={perfumesItem.imageSrc}
                      alt={perfumesItem.title}
                    />
                  </Link>
                </div>
                <div className="flex transform flex-col gap-2 md:mt-auto mr-auto w-[270px]  items-center md:items-start justify-end">
                  <h2 className=" text-center md:text-start text-lg md:text-2xl font-semibold font-inter">
                    {i18n.t("featured.perfume.title")}
                  </h2>
                  <p className=" text-center md:text-start text-sm ">
                    {i18n.t("featured.perfume.description")}
                  </p>
                  <button className="mb-6 md:mb-0 flex gap-2 underline underline-offset-8 py-2  focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
                    <span> {i18n.t("featured.shopNow")}</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;

import RedTitle from "../common/RedTitle";
import playstationImage from "../../assets/custom/playstation.svg";
import speakersImage from "../../assets/custom/speakers.svg";
import perfumeImage from "../../assets/custom/perfume.svg";
import i18n from "../common/LangConfig";

const Featured = () => {
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
              <img
                src={playstationImage}
                alt="PlayStation 5"
                className="w-full h-full"
              />
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
          <div className="bg-black rounded md:pt-12 md:px-6 md:h-[284px] md:w-[570px]">
            <div className=" text-white relative flex gap-10  md:mt-16 items-center justify-center flex-col-reverse md:flex-row">
              <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover"></div>
              <div className="flex transform flex-col gap-4 mt-auto mr-auto w-[270px]">
                <h2 className=" text-center md:text-start text-lg md:text-2xl font-semibold font-inter">
                  {i18n.t("featured.WomenCollections.title")}
                </h2>
                <p className=" text-center md:text-start text-sm ">
                  {i18n.t("featured.WomenCollections.description")}
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

          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-black rounded md:px-6 md:h-[284px] md:w-[270px]">
              <div className=" text-white relative flex gap-10  md:mt-10 items-center justify-center flex-col-reverse md:flex-row  md:h-[221px] ">
                <div className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={speakersImage}
                    alt="PlayStation 5"
                    className="w-full h-full"
                  />
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
                  <img
                    src={perfumeImage}
                    alt="PlayStation 5"
                    className="w-full h-full"
                  />
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

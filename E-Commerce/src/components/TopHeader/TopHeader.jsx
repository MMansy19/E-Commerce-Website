// TopHeader.jsx
import ChangeLang from "./ChangeLang";
import i18n from "../common/LangConfig";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black z-40 px-4 py-1">
      <div className="bg-black flex justify-between items-center lg:px-64">
        <div className="text-white flex justify-center gap-2 items-center flex-1">
          <h1 className="hidden md:text-sm md:inline">{i18n.t("topHeader")}</h1>
          <button className="font-semibold underline">{i18n.t("shop")}</button>
        </div>
        <ChangeLang />
      </div>
    </div>
  );
};

export default TopHeader;

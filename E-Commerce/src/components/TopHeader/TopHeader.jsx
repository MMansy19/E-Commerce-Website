// TopHeader.jsx
import ChangeLang from "./ChangeLang";
import i18n from "./LangConfig";

const TopHeader = () => {
  return (
    <div className="bg-black flex justify-between items-center lg:px-64">
      <div className="text-white flex justify-center gap-2 items-center flex-1">
        <h1 className="hidden md:text-sm md:inline">{i18n.t("topHeader")}</h1>
        <button className="font-semibold underline">{i18n.t("shop")}</button>
      </div>
      <ChangeLang />
    </div>
  );
};

export default TopHeader;

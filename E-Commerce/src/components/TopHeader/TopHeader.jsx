// TopHeader.jsx
import React from "react";
import ChangeLang from "./ChangeLang";
import i18n from "./LangConfig";

const TopHeader = () => {
  return (
    <div className="bg-black py-3 flex justify-between items-center lg:px-64">
      <div className="text-white flex justify-center gap-2 items-center flex-1">
        <h1 className="text-sm">{i18n.t("topHeader")}</h1>
        <button className="font-semibold underline">{i18n.t("shop")}</button>
      </div>
      <ChangeLang />
    </div>
  );
};

export default TopHeader;

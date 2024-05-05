/* eslint-disable react-refresh/only-export-components */
// LangContext.jsx
import { createContext, useState, useContext } from "react";
import i18n from "../components/common/components/LangConfig";

const LangContext = createContext();

export const useLang = () => {
  return useContext(LangContext);
};

import PropTypes from "prop-types";

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(i18n.language);

  const changeLanguage = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import Header from "./components/Header/Header.jsx";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { LangProvider } from "./components/TopHeader/LangContext.jsx";
import i18n from "./components/TopHeader/LangConfig.jsx";

function App() {
  return (
    <div dir={i18n.t("dir")} className="font-poppins">
      <LangProvider>
        <TopHeader />
        <Header />
        <h1 className="text-3xl font-bold underline mx-auto text-center">
          {i18n.t("welcome")}
        </h1>
      </LangProvider>
    </div>
  );
}

export default App;

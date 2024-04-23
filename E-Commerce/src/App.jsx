import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Header from "./components/Header/Header.jsx";
import TopHeader from "./components/TopHeader/TopHeader.jsx";
import { LangProvider } from "./components/TopHeader/LangContext.jsx";
import i18n from "./components/TopHeader/LangConfig.jsx";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div dir={i18n.t("dir")} className="font-poppins">
        <LangProvider>
          <TopHeader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </LangProvider>
      </div>
    </Router>
  );
}

export default App;

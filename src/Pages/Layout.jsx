// Layout.js
import React from "react";
import { Route, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TopHeader from "../components/TopHeader/TopHeader";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
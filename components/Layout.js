import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

const Layout = ({ children, isJumbotron = false }) => {
  return (
    <>
      <Navbar />
      {isJumbotron ? <Jumbotron /> : null}
      {children}
      <Footer />
    </>
  );
};

export default Layout;

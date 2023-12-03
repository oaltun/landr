import React from "react";
import Meta from "./Meta";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

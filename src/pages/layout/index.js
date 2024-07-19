import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

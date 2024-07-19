import React from "react";
import PropTypes from "prop-types";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Footer from "components/Footer";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;

AdminLayout.propTypes = {
  children: PropTypes.node,
};

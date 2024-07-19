import React from "react";
import { Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/Routes";
import AuthProtected from "./utils/AuthProtected";
import PageNotFound from "./pages/pageNotFound";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "pages/layout";
import AdminLayout from "pages/adminLayout";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
        {authProtectedRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={
              <AuthProtected>
                <AdminLayout>{route.component}</AdminLayout>
              </AuthProtected>
            }
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

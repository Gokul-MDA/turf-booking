import React from "react";
import { Routes, Route } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./utils/Routes";
import AuthProtected from "./utils/AuthProtected";
import PageNotFound from "./pages/pageNotFound";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
        {authProtectedRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={<AuthProtected>{route.component}</AuthProtected>}
          />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

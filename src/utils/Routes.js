import React from "react";
import Login from "pages/login";
import Home from "pages/home";
import Slots from "pages/slots";
import Admin from "pages/admin";

export const URL = {
  login: "login",
  home: "home",
  slots: "slots",
  admin: "admin",
};

const authProtectedRoutes = [{ path: URL.admin, component: <Admin /> }];

const publicRoutes = [
  { path: URL.login, component: <Login /> },
  { path: URL.home, component: <Home /> },
  { path: URL.slots, component: <Slots /> },
];

export { authProtectedRoutes, publicRoutes };

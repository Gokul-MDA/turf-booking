import React from "react";
import Login from "pages/login";
import Home from "pages/home";
import Slots from "pages/slots";

export const URL = {
  login: "login",
  home: "home",
  slots: "slots",
};

const authProtectedRoutes = [];

const publicRoutes = [
  { path: URL.login, component: <Login /> },
  { path: URL.home, component: <Home /> },
  { path: URL.slots, component: <Slots /> },
];

export { authProtectedRoutes, publicRoutes };

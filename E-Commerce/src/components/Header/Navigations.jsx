import React from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navigations = () => {
  const location = useLocation();

  // Map routes to their corresponding labels
  const routes = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
    { path: "/signup", label: "Sign Up" },
  ];

  // Find the index of the current route
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === location.pathname
  );

  return (
    <Tabs value={currentRouteIndex !== -1 ? currentRouteIndex : false}>
      {routes.map((route, index) => (
        <Tab
          sx={{
            textTransform: "none",
            fontSize: "16px",
            color: "black",
          }}
          key={index}
          label={route.label}
          component={Link}
          to={route.path}
        />
      ))}
    </Tabs>
  );
};

export default Navigations;

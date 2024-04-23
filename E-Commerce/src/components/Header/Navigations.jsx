import React from "react";
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navigations = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Tabs
      variant={isMobile ? "scrollable" : "standard"}
      indicatorColor="primary"
      textColor="primary"
      left
      value={currentRouteIndex !== -1 ? currentRouteIndex : false}
    >
      {routes.map((route, index) => (
        <Tab
          sx={{
            textTransform: "none",
            fontSize: "16px",
            "&.Mui-selected": {
              color: "black",
            },
            "&:hover": {
              color: "inherit",
            },
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

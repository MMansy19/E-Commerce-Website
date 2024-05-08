import i18n from "../common/components/LangConfig";

import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

const Navigations = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Map routes to their corresponding labels
  const routes = [
    { path: "/", label: i18n.t("home") },
    { path: "/contact", label: i18n.t("contact") },
    { path: "/about", label: i18n.t("about") },
    { path: "/signup", label: i18n.t("signUp") },
  ];

  // Find the index of the current route
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === location.pathname
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <svg
              width="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            className="z-50"
          >
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-5 py-20 w-60 bg-white h-screen flex flex-col justify-between"
            >
              <List>
                {routes.map((route, index) => (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={route.path}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={route.label} />
                  </ListItem>
                ))}
              </List>
              <footer className="text-center py-4">
                <a
                  href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  © 2024 Mahmoud Mansy.
                  {i18n.t("footer.allRightsReserved")}
                </a>
              </footer>
            </motion.div>
          </Drawer>
        </>
      ) : (
        <Tabs
          variant="standard"
          indicatorColor="primary"
          textColor="primary"
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
      )}
    </>
  );
};

export default Navigations;

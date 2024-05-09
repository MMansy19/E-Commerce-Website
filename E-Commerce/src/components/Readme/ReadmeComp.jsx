import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import Slide from "@mui/material/Slide";

import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic.jpeg";
import Footer from "./Footer";
const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenReadme");
    if (!hasSeen) {
      setOpen(true);
    }
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          open={open}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline">
                  <a href="https://github.com/MMansy19/E-Commerce-Website">
                    App Readme
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/MMansy19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar alt="Your Name" src={profilePic} />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="body1" textAlign="center" mx={2} paragraph>
                This is an e-commerce app built with React, Vite, Tailwind CSS,
                Firebase, React Router, Context API, and React Icons.
              </Typography>
              <Typography variant="body1" paragraph>
                Features:
              </Typography>
              <ul className="list-disc ml-6 mb-4">
                <li>Multi-language support (Arabic, English, and German).</li>
                <li>
                  Advanced sorting and filtering algorithms for product display.
                </li>
                <li>Dynamic Flash Sale Slider.</li>
                <li>Efficient product search functionality.</li>
                <li>
                  Secure authentication and user management with Firebase.
                </li>
                <li>
                  Seamless shopping experience with Cart and Wishlist features.
                </li>
                <li>Responsive design for all devices.</li>
              </ul>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <IconButton
        className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2 transition duration-300"
        onClick={handleOpen}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <BsExclamation className="hover:bg-red-500 rounded-full w-6 h-auto md:w-8 md:h-8" />
      </IconButton>
    </>
  );
};

export default ReadmeComponent;

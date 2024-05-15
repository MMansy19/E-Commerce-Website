import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic2.1.png";
import Footer from "./Footer";

const ReadmeComponent = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
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
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-blue-500 hover:underline text-base md:text-lg">
                  <a href="https://github.com/MMansy19/E-Commerce-Website">
                    𝐀𝐩𝐩 𝐑𝐞𝐚𝐝𝐦𝐞
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/MMansy19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Mahmoud Mansy"
                    src={profilePic}
                    sx={{
                      width: isMobile ? "60px" : "70px",
                      height: "auto",
                      border: "2px solid #3B82F6",
                    }}
                  />
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
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.25rem" }}
              >
                ⚡ 𝐈'𝐦 𝐚 𝐏𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐑𝐞𝐚𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐰𝐢𝐭𝐡 𝟒𝟎+ 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬.
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? "1rem" : "1.25rem" }}
              >
                𝐓𝐡𝐢𝐬 𝐄-𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐞 𝐚𝐩𝐩 𝐛𝐮𝐢𝐥𝐭 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭, 𝐕𝐢𝐭𝐞, 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒,
                𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞, 𝐑𝐞𝐚𝐜𝐭 𝐑𝐨𝐮𝐭𝐞𝐫 𝐚𝐧𝐝 𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐀𝐏𝐈.
              </Typography>
              <Divider />
              <Typography
                paragraph
                className="text-gray-800 "
                style={{
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  marginTop: "1rem",
                  fontWeight: "bold",
                }}
              >
                Key Features:
              </Typography>
              <ul className="flex flex-col gap-2   ml-3 md:ml-6 mb-4 text-sm md:text-base text-gray-800 list-none">
                <li>
                  ✅ 𝑺𝒆𝒂𝒎𝒍𝒆𝒔𝒔 𝒎𝒖𝒍𝒕𝒊-𝒍𝒂𝒏𝒈𝒖𝒂𝒈𝒆 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 (𝑬𝒏𝒈𝒍𝒊𝒔𝒉, 𝑨𝒓𝒂𝒃𝒊𝒄 , 𝑺𝒑𝒂𝒏𝒊𝒔𝒉
                  𝒂𝒏𝒅 𝑮𝒆𝒓𝒎𝒂𝒏).
                </li>
                <li>
                  ✅ 𝑬𝒇𝒇𝒊𝒄𝒊𝒆𝒏𝒕 𝒑𝒓𝒐𝒅𝒖𝒄𝒕 𝒔𝒆𝒂𝒓𝒄𝒉 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒂𝒍𝒊𝒕𝒚 𝒇𝒐𝒓 𝒆𝒏𝒉𝒂𝒏𝒄𝒆𝒅 𝒖𝒔𝒆𝒓
                  𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆.
                </li>
                <li>
                  ✅ 𝑺𝒆𝒄𝒖𝒓𝒆 𝒂𝒖𝒕𝒉𝒆𝒏𝒕𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝒖𝒔𝒆𝒓 𝒎𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝒑𝒐𝒘𝒆𝒓𝒆𝒅 𝒃𝒚
                  𝑭𝒊𝒓𝒆𝒃𝒂𝒔𝒆.
                </li>
                <li>
                  ✅ 𝑺𝒕𝒓𝒆𝒂𝒎𝒍𝒊𝒏𝒆𝒅 𝒔𝒉𝒐𝒑𝒑𝒊𝒏𝒈 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒘𝒊𝒕𝒉 𝑪𝒂𝒓𝒕 𝒂𝒏𝒅 𝑾𝒊𝒔𝒉𝒍𝒊𝒔𝒕
                  𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒂𝒍𝒊𝒕𝒊𝒆𝒔.
                </li>
                <li>
                  ✅ 𝑰𝒎𝒑𝒆𝒄𝒄𝒂𝒃𝒍𝒚 𝒓𝒆𝒔𝒑𝒐𝒏𝒔𝒊𝒗𝒆 𝒅𝒆𝒔𝒊𝒈𝒏 𝒄𝒂𝒕𝒆𝒓𝒊𝒏𝒈 𝒕𝒐 𝒅𝒊𝒗𝒆𝒓𝒔𝒆 𝒅𝒆𝒗𝒊𝒄𝒆𝒔
                  𝒂𝒏𝒅 𝒔𝒄𝒓𝒆𝒆𝒏𝒔.
                </li>
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

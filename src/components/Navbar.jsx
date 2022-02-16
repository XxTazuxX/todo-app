/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { signOutClick } from "../firebase/firebase";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { blue, grey } from "@mui/material/colors";

// MUI Color
const cGrey = grey[400];
const cBlue = blue[900];

const Navbar = ({ clearState, displayName, photoURL }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);

  // Handler
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };

  const signOut = async () => {
    clearState();
    await signOutClick();
  };

  return (
    <div className="flex justify-between items-center px-3 md:px-8 py-1 md:py-3 box-border text-lg z-[105] border-b-{0.5px} border-gray-400">
      <div className="flex justify-center items-center">
        <PlaylistAddCheckIcon sx={{ color: cBlue, fontSize: "50px" }} />
        <h1 className="ml-1 font-qahiri font-bold text-3xl text-blue-900">
          Todo List
        </h1>
      </div>
      <div className="flex justify-end items-center gap-[0.7rem]">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleClick}
          role="menu"
          tabIndex="0"
        >
          <div className="flex justify-center items-center text-xl text-gray-400">
            <h3>{displayName}</h3>
          </div>
          <div>
            <KeyboardArrowDownIcon sx={{ color: cGrey }} />
          </div>
        </div>

        <Menu
          id="profile-menu"
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
        >
          <Paper
            variant="outlined"
            square
            sx={{ width: 120, textAlign: "center" }}
          >
            <IconButton onClick={handleClose}>
              <Link
                href="https://github.com/XxTazuxX/todo-app"
                underline="none"
              >
                <MenuItem sx={{ color: cGrey }}>Profile</MenuItem>
              </Link>
            </IconButton>
            <Divider />
            {/* Firebase signOut method */}
            <IconButton onClick={signOut}>
              <MenuItem sx={{ color: cGrey }}>Logout</MenuItem>
            </IconButton>
          </Paper>
        </Menu>
        <div>
          <Avatar src={photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

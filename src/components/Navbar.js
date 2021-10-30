/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { blue, grey } from "@mui/material/colors";

const cGrey = grey[400];
const cBlue = blue[900];

const Navbar = ({ loginFunc }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const open = Boolean(menuAnchor);
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchor(null);
  };
  const handleLogout = () => {
    setMenuAnchor(null);

    loginFunc();
  };

  return (
    <div className="flex justify-between items-center px-8 py-3 box-border text-lg z-[105] border-b-{0.5px} border-gray-400">
      <div className="flex justify-center items-center ml-2">
        <PlaylistAddCheckIcon sx={{ color: cBlue, fontSize: "50px" }} />
        <h1 className="ml-1 font-qahiri font-bold text-3xl text-blue-900">
          Todo List
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center relative right-8 cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex justify-center items-center text-xl text-gray-400">
            <h3>Tazu</h3>
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
              <MenuItem sx={{ color: cGrey }}>Profile</MenuItem>
            </IconButton>
            <Divider />
            <IconButton onClick={handleLogout}>
              <MenuItem sx={{ color: cGrey }}>Logout</MenuItem>
            </IconButton>
          </Paper>
        </Menu>
        <div>
          <Avatar src="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

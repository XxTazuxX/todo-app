/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { grey, blue } from "@mui/material/colors";
import { Button, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: grey[100],
    },
  },
});

const MenuBtn = ({ name, icon, value, setStatus, status }) => {
  const Icons = icon;
  const boolStatus = status === value;
  const active = boolStatus ? "contained" : "text";
  const activeColor = boolStatus ? "primary" : "secondary";
  const iconColor = boolStatus ? grey[100] : grey[400];
  const textColor = boolStatus ? grey[100] : grey[400];

  const handleStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className="py-2 ml-1 md:ml-3">
      <Button
        theme={theme}
        value={value}
        onClick={handleStatus}
        size="small"
        color={activeColor}
        variant={active}
        style={{ justifyContent: "flex-start" }}
        startIcon={<Icons sx={{ color: iconColor }} />}
      >
        <Typography variant="subtitle2" color={textColor}>
          {name}
        </Typography>
        {/* <div className="cursor-pointer flex justify-center items-center md:px-4 py-3">
        <div className="relative flex justify-content items-center w-5 h-5">
          <Icons sx={{ color: grey[400] }} />
        </div>
        <h3 className="font-medium text-xs md:text-sm text-gray-400 ml-1 md:ml-3">
          {name}
        </h3>
      </div> */}
      </Button>
    </div>
  );
};

export default MenuBtn;

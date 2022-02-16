import React from "react";
import grey from "@mui/material/colors/grey";
import blue from "@mui/material/colors/blue";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

const MenuBtn = ({ name, icon, value, status, setStatus }) => {
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
    <div className="py-3 ml-[1px] md:ml-3">
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
      </Button>
    </div>
  );
};

export default MenuBtn;

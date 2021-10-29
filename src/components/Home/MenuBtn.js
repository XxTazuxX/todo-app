import React from "react";
import { grey } from "@mui/material/colors";

const MenuBtn = ({ name, icon }) => {
  const Icons = icon;
  return (
    <div className="flex justify-center items-center cursor-pointer mt-3 px-4 py-3">
      <div className="relative flex justify-content items-center w-5 h-5">
        <Icons sx={{ color: grey[400] }} />
      </div>
      <h3 className="font-medium text-md text-gray-400 ml-3">{name}</h3>
    </div>
  );
};

export default MenuBtn;

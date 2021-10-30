import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import CachedIcon from "@mui/icons-material/Cached";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import TodayIcon from "@mui/icons-material/Today";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ButtonGroup from "@mui/material/ButtonGroup";

import MenuBtn from "./MenuBtn";

const Menus = [
  {
    name: "All Tasks",
    icon: ReorderIcon,
    value: "all",
  },
  {
    name: "In Progress",
    icon: CachedIcon,
    value: "progress",
  },
  {
    name: "Completed",
    icon: DoneOutlineIcon,
    value: "complete",
  },
  {
    name: "Today",
    icon: TodayIcon,
    value: "today",
  },
  {
    name: "Tomorrow",
    icon: NextPlanIcon,
    value: "tomorrow",
  },
  {
    name: "Month",
    icon: CalendarTodayIcon,
    value: "month",
  },
];

const Menu = ({ setStatus, status }) => {
  return (
    <div className="flex justify-center items-start py-[10px] px-[10px] flex-col">
      <h3 className="mt-4 py-[10px] px-1 md:px-4 text-sm text-gray-400">
        Tasks Management
      </h3>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        aria-label="menu button"
      >
        {Menus.map(({ name, icon, value }) => {
          return (
            <MenuBtn
              key={name}
              value={value}
              setStatus={setStatus}
              status={status}
              name={name}
              icon={icon}
            />
          );
        })}
      </ButtonGroup>
    </div>
  );
};

export default Menu;

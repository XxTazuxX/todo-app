import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import CachedIcon from "@mui/icons-material/Cached";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import TodayIcon from "@mui/icons-material/Today";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import MenuBtn from "./MenuBtn";

const Menus = [
  {
    name: "All Tasks",
    icon: ReorderIcon,
  },
  {
    name: "In Progress",
    icon: CachedIcon,
  },
  {
    name: "Completed",
    icon: DoneOutlineIcon,
  },
  {
    name: "Today",
    icon: TodayIcon,
  },
  {
    name: "Tomorrow",
    icon: NextPlanIcon,
  },
  {
    name: "Month",
    icon: CalendarTodayIcon,
  },
];

const Menu = () => {
  return (
    <div className="flex justify-center items-start py-[10px] px-[20px] flex-col">
      <h3 className="mt-4 py-[10px] px-4 text-sm text-gray-400">
        Tasks Management
      </h3>
      {Menus.map(({ name, icon }) => {
        return <MenuBtn key={name} name={name} icon={icon} />;
      })}
    </div>
  );
};

export default Menu;

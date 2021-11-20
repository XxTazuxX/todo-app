import {
  Reorder,
  Cached,
  DoneOutline,
  Today,
  NextPlan,
  CalendarToday,
} from "@mui/icons-material";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuBtn from "./MenuBtn";

const Menus = [
  {
    name: "All Tasks",
    icon: Reorder,
    value: "all",
  },
  {
    name: "In Progress",
    icon: Cached,
    value: "progress",
  },
  {
    name: "Completed",
    icon: DoneOutline,
    value: "complete",
  },
  {
    name: "Today",
    icon: Today,
    value: "today",
  },
  {
    name: "Tomorrow",
    icon: NextPlan,
    value: "tomorrow",
  },
  {
    name: "Month",
    icon: CalendarToday,
    value: "month",
  },
];

const Menu = ({ status, setStatus }) => {
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
              name={name}
              icon={icon}
              status={status}
              setStatus={setStatus}
            />
          );
        })}
      </ButtonGroup>
    </div>
  );
};

export default Menu;

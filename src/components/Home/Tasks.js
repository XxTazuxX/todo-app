import React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import TaskCard from "./TaskCard";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
});

const Tasks = () => {
  return (
    <div className="pb-2">
      <div className="flex justify-between px-11 py-10">
        <div className="flex justify-center">
          <h3 className="text-blue-900 font-bold text-xl sm:text-3xl md:text-5xl">
            All Tasks
          </h3>
          <span className="font-light text-xs sm:text-base md:text-xl text-gray-400 ml-1 mt-4">
            (0)
          </span>
        </div>
        <Button theme={theme} color="primary" variant="contained">
          + New Task
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Tasks;

import React from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import TaskList from "./TaskList";

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
          <h3 className="text-blue-900 font-bold text-5xl">All Tasks</h3>
          <span className="font-light text-xl text-gray-400 ml-1 mt-4">
            (0)
          </span>
        </div>
        <Button theme={theme} color="primary" variant="contained">
          + New Task
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <TaskList />
      </div>
    </div>
  );
};

export default Tasks;

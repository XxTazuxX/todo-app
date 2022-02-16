import { lazy, Suspense } from "react";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import AddIcon from "@mui/icons-material/Add";
import { createTheme } from "@mui/material/styles";
import blue from "@mui/material/colors/blue";

import { dateFormat } from "../../utilities";

const TaskCard = lazy(() => import("./TaskCard"));

const theme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
  },
});

const Tasks = ({ addTaskHandler, tasks, uid }) => {
  return (
    <div className="pb-2">
      <div className="flex justify-between px-11 py-10">
        <div className="flex justify-center">
          <h3 className="text-blue-900 font-bold text-xl sm:text-3xl md:text-5xl">
            All Tasks
            <span className="font-light text-xs sm:text-base md:text-xl text-gray-400 ml-1 mt-4">
              (0)
            </span>
          </h3>
        </div>
        <Chip
          icon={<AddIcon />}
          theme={theme}
          color="primary"
          label="New Task"
          sx={{
            maxWidth: "110px",
            maxHeight: "40px",
            minWidth: "110px",
            minHeight: "40px",
          }}
          onClick={addTaskHandler}
        />
      </div>
      <div className="flex justify-center items-start px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Suspense
            fallback={
              <div>
                <LinearProgress />
              </div>
            }
          >
            {tasks.map((task) => {
              return (
                <TaskCard
                  key={task.id}
                  uid={uid}
                  task={task}
                  title={task.title}
                  description={task.description}
                  date={dateFormat(task.date)}
                />
              );
            })}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Tasks;

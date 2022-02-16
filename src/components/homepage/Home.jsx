import { useState, useEffect } from "react";
import { isToday, isTomorrow, isThisMonth } from "date-fns";
import Menu from "./Menu";
import Task from "./Task";

const Home = ({ tasks, addTaskHandler, uid }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    handleFilteredTasks();
  }, [tasks, status]);

  // Filter Task Functions
  const handleFilteredTasks = () => {
    switch (status) {
      case "progress":
        setFilteredTasks(tasks.filter((task) => task.complete === false));
        break;
      case "complete":
        setFilteredTasks(tasks.filter((task) => task.complete === true));
        break;
      case "today":
        setFilteredTasks(tasks.filter((task) => isToday(task.parseDate)));
        break;
      case "tomorrow":
        setFilteredTasks(tasks.filter((task) => isTomorrow(task.parseDate)));
        break;
      case "month":
        setFilteredTasks(tasks.filter((task) => isThisMonth(task.parseDate)));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  return (
    <div className="md:flex z-[15] box-border">
      <div className="hidden md:block md:w-1/5 h-[88vh] border-r-[0.5px] border-gray-400">
        <Menu status={status} setStatus={setStatus} />
      </div>
      <div className="w-full md:w-[80%] h-[88vh] pb-10 overflow-y-auto">
        <Task uid={uid} tasks={filteredTasks} addTaskHandler={addTaskHandler} />
      </div>
    </div>
  );
};

export default Home;

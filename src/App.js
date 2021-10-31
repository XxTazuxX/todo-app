/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { isToday, isTomorrow, isThisMonth } from "date-fns";

import LoginPage from "./components/UserAuth/LoginPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import NewTask from "./components/NewTask";

const App = () => {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    important: "",
  });
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // useEffect
  useEffect(() => {
    getLocalTask();
    handleFilteredTasks();
  }, []);

  useEffect(() => {
    handleFilteredTasks();
    saveLocalTask();
  }, [tasks, status]);

  // Functions
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

  const loginFunc = () => {
    setLogin(!login);
  };
  const newTaskHandler = () => {
    setOpen(!open);
  };

  // Local Storage
  const saveLocalTask = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTask = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(tasksLocal);
    }
  };

  return (
    <div>
      {open && (
        <NewTask
          newTask={newTask}
          setNewTask={setNewTask}
          tasks={tasks}
          setTasks={setTasks}
          newTaskHandler={newTaskHandler}
        />
      )}
      {login ? (
        <>
          <Navbar loginFunc={loginFunc} />
          <Home
            tasks={tasks}
            setTasks={setTasks}
            setStatus={setStatus}
            status={status}
            filteredTasks={filteredTasks}
            newTaskHandler={newTaskHandler}
          />
        </>
      ) : (
        <LoginPage loginFunc={loginFunc} />
      )}
    </div>
  );
};

export default App;

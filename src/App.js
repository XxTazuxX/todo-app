/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

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
    date: "31/10/2021",
    important: "",
  });
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  // useEffect
  useEffect(() => {
    handleFilteredTasks();
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

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Importance = [
  {
    value: "low",
    label: "LOW",
  },
  {
    value: "medium",
    label: "MEDIUM",
  },
  {
    value: "high",
    label: "HIGH",
  },
];

const NewTask = ({ tasks, setTasks, newTask, setNewTask, newTaskHandler }) => {
  const handleInput = (e) => {
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name;
    const value = e.target.value;

    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      { ...newTask, complete: false, id: new Date().getTime().toString() },
    ]);
    setNewTask({
      title: "",
      description: "",
      date: "31/10/2021",
      important: "",
    });
    newTaskHandler();
  };

  return (
    <form>
      <div id="new-task">
        <div className="newTask">
          <div className="input-content">
            <h3>Title</h3>
            <input
              value={newTask.title}
              onChange={handleInput}
              className="title-input"
              type="text"
              name="title"
              placeholder="What needs be done ?"
            />
          </div>
          <div className="input-content">
            <h3>Description</h3>
            <textarea
              value={newTask.description}
              onChange={handleInput}
              type="text"
              name="description"
              placeholder="Description about this task"
            ></textarea>
          </div>
          <div className="input-content">
            <h3>Date picker</h3>
            <TextField
              id="date"
              name="date"
              value={newTask.date}
              onChange={handleInput}
              variant="outlined"
            />
          </div>
          <div className="input-content">
            <TextField
              id="Importance-select"
              name="important"
              select
              label="Importance"
              value={newTask.importance}
              onChange={handleInput}
              helperText="Please select your importance Level"
            >
              {Importance.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <button onClick={handleSubmit} className="btnNew">
            Add New Task
          </button>
          <p className="close" onClick={newTaskHandler}>
            X
          </p>
        </div>
      </div>
    </form>
  );
};

export default NewTask;

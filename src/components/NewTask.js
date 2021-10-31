/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import isPast from "date-fns/isPast";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

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
  const [date, setDate] = useState(new Date());

  const handleInput = (e) => {
    // eslint-disable-next-line no-unused-vars
    const name = e.target.name;
    const value = e.target.value;

    setNewTask({ ...newTask, [name]: value });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks([
      ...tasks,
      {
        ...newTask,
        date: new Intl.DateTimeFormat("en-US", {
          dateStyle: "medium",
        }).format(date),
        parseDate: Date.parse(date),
        complete: false,
        id: new Date().getTime().toString(),
      },
    ]);
    setNewTask({
      title: "",
      description: "",
      important: "",
    });
    newTaskHandler();
  };

  return (
    <form onSubmit={handleSubmit}>
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
              required
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
              required
            ></textarea>
          </div>
          <div className="input-content">
            <h3>Date picker</h3>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Date mobile"
                name="date"
                inputFormat="MM/dd/yyyy"
                shouldDisableDate={isPast}
                value={date}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            {/* <TextField
              id="date"
              name="date"
              value={newTask.date}
              onChange={handleInput}
              variant="outlined"
            /> */}
          </div>
          <div className="input-content">
            <TextField
              id="Importance-select"
              name="important"
              select
              label="Importance"
              value={newTask.important}
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

          <button type="submit" className="btnNew">
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

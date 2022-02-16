import { useState } from "react";
import isPast from "date-fns/isPast";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

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

const AddTask = ({ addTaskHandler, user }) => {
  const [date, setDate] = useState(new Date());
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    important: "low",
    complete: false,
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewTask({
      ...newTask,
      [name]: value,
      date,
      parseDate: Date.parse(date),
    });
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(firestore, `users/${user.uid}/tasks`), newTask);

    setNewTask({
      title: "",
      description: "",
      important: "low",
    });
    addTaskHandler();
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
              name="description"
              placeholder="Description about this task"
              required
            />
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
          <button className="close" onClick={addTaskHandler}>
            X
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;

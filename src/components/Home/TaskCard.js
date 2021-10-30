/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip,
  Fade,
} from "@mui/material";
import { grey, green, red, yellow } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TaskCard = ({ title, description, date, task, tasks, setTasks }) => {
  const complete = task.complete;
  let color = yellow[800];

  switch (task.important) {
    case "low":
      color = yellow[800];
      break;
    case "medium":
      color = green[800];
      break;
    case "high":
      color = red[800];
      break;
  }

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const handleComplete = () => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            complete: !t.complete,
          };
        }
        return t;
      })
    );
  };

  return (
    <Card elevation={4}>
      <CardHeader
        title={
          <Typography variant="h6" color={grey[700]}>
            {title}
          </Typography>
        }
        action={
          <IconButton onClick={handleDelete} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ height: 150, overflow: "auto" }}>
        {description}
      </CardContent>
      <CardActions disableSpacing sx={{ bottom: 1 }}>
        <IconButton aria-label="date">
          <AccessTimeIcon />
          <Typography variant="subtitle2" fontWeight="bold" color={grey[900]}>
            {date}
          </Typography>
        </IconButton>
        <IconButton aria-label="important">
          <ImportContactsIcon sx={{ color: color }} />
        </IconButton>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="top"
          arrow
          title={complete ? "Completed" : "In Progress"}
        >
          <IconButton onClick={handleComplete} aria-label="complete">
            {complete ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default TaskCard;

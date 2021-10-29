/* eslint-disable no-unused-vars */
import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  return (
    <div>
      <Card
        variant="outlined"
        sx={{ width: 300, maxWidth: 350, height: 200, maxHeight: 250 }}
      >
        <CardHeader
          title="Title"
          action={
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        />
        <CardContent>This</CardContent>
        <CardActions disableSpacing sx={{ bottom: 1 }}>
          <IconButton aria-label="add to favorites">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default TaskList;

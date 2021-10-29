/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TaskCard = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title={
          <Typography variant="h6" color={grey[700]}>
            Shrimp and Chorizo Paella
          </Typography>
        }
        action={
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent sx={{ height: 150, overflow: "auto" }}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </CardContent>
      <CardActions disableSpacing sx={{ bottom: 1 }}>
        <IconButton aria-label="add to favorites">
          <AccessTimeIcon />
          <Typography variant="subtitle2" fontWeight="bold" color={grey[900]}>
            10/29/2021
          </Typography>
        </IconButton>
        <IconButton aria-label="important">
          <ImportContactsIcon />
        </IconButton>
        <IconButton aria-label="Completed status">
          <CheckCircleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskCard;

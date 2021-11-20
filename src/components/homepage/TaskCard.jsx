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
import {
  Delete,
  AccessTime,
  ImportContacts,
  CheckCircleOutline,
  CheckCircle,
} from "@mui/icons-material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const TaskCard = ({ title, description, date, task, uid }) => {
  const complete = task.complete;
  let color = green[800];
  let text = "Low";

  switch (task.important) {
    case "low":
      color = green[800];
      text = "Low";
      break;
    case "medium":
      color = yellow[800];
      text = "Medium";
      break;
    case "high":
      color = red[800];
      text = "High";
      break;
  }

  const docRef = doc(firestore, `users/${uid}/tasks`, task.id);

  const handleRemove = async () => {
    await deleteDoc(docRef);
  };

  const handleComplete = async (id) => {
    await updateDoc(docRef, {
      complete: !complete,
    });
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
          <IconButton onClick={handleRemove} aria-label="delete">
            <Delete />
          </IconButton>
        }
      />
      <CardContent sx={{ height: 150, overflow: "auto" }}>
        {description}
      </CardContent>
      <CardActions disableSpacing sx={{ bottom: 1 }}>
        <IconButton aria-label="date">
          <AccessTime />
          <Typography variant="subtitle2" fontWeight="bold" color={grey[900]}>
            {date}
          </Typography>
        </IconButton>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
          placement="top"
          arrow
          title={text}
        >
          <ImportContacts sx={{ color: color }} />
        </Tooltip>
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="top"
          arrow
          title={complete ? "Completed" : "In Progress"}
        >
          <IconButton onClick={handleComplete} aria-label="complete">
            {complete ? <CheckCircle /> : <CheckCircleOutline />}
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default TaskCard;

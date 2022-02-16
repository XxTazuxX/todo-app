import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import grey from "@mui/material/colors/grey";
import green from "@mui/material/colors/green";
import red from "@mui/material/colors/red";
import yellow from "@mui/material/colors/yellow";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
        <Tooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
          placement="top"
          arrow
          title={text}
        >
          <ImportContactsIcon sx={{ color: color }} />
        </Tooltip>
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

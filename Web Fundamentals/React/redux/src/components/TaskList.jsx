import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../features/tasks/taskSelectore";
import {
  deleteTasks,
  toggleTask,
} from "../features/tasks/taskSlice";

import {
  Paper,
  Checkbox,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const tasks = useSelector(selectTasks); // GLOBAL STATE READ
  const dispatch = useDispatch();

  return (
    <Paper elevation={3} className="p-4 mt-6">
      <List className="mt-10">
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            className="flex justify-between"
          >
            <div className="flex items-center gap-10">
              <Checkbox
                checked={task.completed}
                onChange={() =>
                  dispatch(toggleTask(task.id))
                }
              />

              <ListItemText
                primary={
                  <Typography
                    sx={{
                      textDecoration: task.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {task.title}
                  </Typography>
                }
              />
            </div>

            <IconButton
              color="error"
              onClick={() =>
                dispatch(deleteTasks(task.id))
              }
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
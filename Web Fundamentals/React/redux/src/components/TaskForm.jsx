import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { TextField, Button, Paper } from "@mui/material";

const TaskForm = () => {
  const [title, setTitle] = useState(""); // LOCAL STATE
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    dispatch(addTask(title)); // GLOBAL STATE UPDATE

    setTitle(""); // clear input
  };

  return (
    <Paper
      elevation={3}
      className="p-6 mt-6"
    >
      <form
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Enter task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md"
        />

        <Button
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </form>
    </Paper>
  );
};

export default TaskForm;
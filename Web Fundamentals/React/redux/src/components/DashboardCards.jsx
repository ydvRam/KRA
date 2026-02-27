import { useSelector } from "react-redux";
import {
  selectTotalTasks,
  selectCompletedTasksCount,
  selectPendingTasksCount,
} from "../features/tasks/taskSelectore";

import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const DashboardCards = () => {
  const total = useSelector(selectTotalTasks);
  const completed = useSelector(selectCompletedTasksCount);
  const pending = useSelector(selectPendingTasksCount);

  return (
    <Grid container spacing={3} className="mt-6 w-full flex justify-evenly ">
      <Grid className="w-[250px] text-center py-5" item xs={12} md={4} >
        <Card elevation={4}>
          <CardContent className="bg-red-300 rounded">
            <Typography variant="h6">
              Total Tasks
            </Typography>
            <Typography variant="h4">
              {total}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid className="w-[250px] text-center py-5" item xs={12} md={4}>
        <Card elevation={4}>
          <CardContent className="bg-green-200">
            <Typography variant="h6">
              Completed
            </Typography>
            <Typography variant="h4">
              {completed}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid className="w-[250px] text-center py-5" item xs={12} md={4}>
        <Card elevation={4}>
          <CardContent className="bg-red-500">
            <Typography variant="h6">
              Pending
            </Typography>
            <Typography variant="h4">
              {pending}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardCards;
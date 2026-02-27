export const selectTasks = (state) => state.tasks.tasks;

export const selectTotalTasks = (state) =>
  state.tasks.tasks.length;

export const selectCompletedTasksCount = (state) =>
  state.tasks.tasks.filter((task) => task.completed).length;

export const selectPendingTasksCount = (state) =>
  state.tasks.tasks.filter((task) => !task.completed).length;

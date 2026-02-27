import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
}
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      })
    },
    deleteTasks: (state, action) => {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(
        (task) => {
          task.id === action.payload
        }
      );
    },
  },
});
export const { addTask, toggleTask, deleteTasks } = taskSlice.actions;
export default taskSlice.reducer;
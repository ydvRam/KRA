import { useSelector } from "react-redux";
import { selectThemeMode } from "./features/theme/themeSelectore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DashboardCards from "./components/DashboardCards";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home";
function App() {
  const mode = useSelector(selectThemeMode);

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#6366f1",
      },
      secondary: {
        main: "#ec4899",
      },
    },

    typography: {
      fontFamily: "Poppins, sans-serif",
      h5: {
        fontWeight: 600,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
            textTransform: "none",
            padding: "8px 26px",
            margin: "7px 10px 7px 10px"
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* UI will come here */}
      <div className="flex justify-center  items-center gap-1">
        <HomeIcon
          color="secondary"
          sx={{ color: "purple", fontSize: "30px", backgroundColor: "pink", padding: "10px", borderRadius: "100%", width: "50px",height:"50px" }}
          className="mt-5 text-center text-xl text-black-900 text-bold"
        />
        <div className="mt-5 text-center text-xl text-black-900 text-bold">Task Manager</div>
      </div>

      <Container maxWidth={"md"}>
        <DashboardCards />
        <TaskForm />
        <TaskList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
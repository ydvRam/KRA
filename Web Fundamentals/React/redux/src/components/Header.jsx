import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar className=" flex justify-between items-center">
        <Typography variant="h6">
          Smart Task Manager
        </Typography>

        <IconButton
          color="inherit"
          onClick={() => dispatch(toggleTheme())}
        >
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
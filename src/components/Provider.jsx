import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7E1E80",
    },
    secondary: {
      main: "#B637FB",
    },
    text: {
      primary: "#3D393B",
    },
  },
});

const Provider = ({ children }) => (
  <MuiThemeProvider {...{ theme }}>
    <>
      <CssBaseline />
      {children}
    </>
  </MuiThemeProvider>
);

export default Provider;

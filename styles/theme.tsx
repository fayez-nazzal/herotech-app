import { amber, deepPurple } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
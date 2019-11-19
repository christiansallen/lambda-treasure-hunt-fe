import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./AppContainer";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import themeStyles from "./themeStyles";

function App() {
  const theme = createMuiTheme(themeStyles);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

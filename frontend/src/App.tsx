import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Provider from "./components/context/Provider";
import { Page } from "./components/Page/Page";
import { GlobalStyles } from "./styles/GlobalStyles";

const theme = {
  colors: {
    main: "#0a9e39",
    secondary: "#383d92",
    white: "#fff",
    black: "#000",
    grey: "#D8D8D8",
  },
};

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Page />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

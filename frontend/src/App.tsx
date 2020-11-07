import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Provider from "./components/context/Provider";
import { Page } from "./components/Page/Page";
import { GlobalStyles } from "./styles/GlobalStyles";
import lightTheme from "./styles/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Provider>
        <BrowserRouter>
          <Page />
          <GlobalStyles />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

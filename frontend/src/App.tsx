import React, { useEffect } from "react";
import Modal from "react-modal";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Provider from "./components/context/Provider";
import { Page } from "./components/Page/Page";
import { GlobalStyles } from "./styles/GlobalStyles";
import lightTheme from "./styles/light";

function App() {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Provider>
        <HashRouter>
          <Page />
          <GlobalStyles />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

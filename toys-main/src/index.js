import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {IntlProvider} from 'react-intl';
import Wrapper from "./components/Wrapper";
ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

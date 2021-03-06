import React from "react";
import ReactDOM from "react-dom";
// Style
import "./index.scss";
// Components
import App from "./App";
// React-Router
import { BrowserRouter } from "react-router-dom";
// React Redux & Redux
import { Provider } from "react-redux";
import store from "./redux/store";
// ServiceWorker
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

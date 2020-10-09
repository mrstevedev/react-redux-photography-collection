import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import { store } from "./store";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("app")
  );
};
render();
store.subscribe(render);

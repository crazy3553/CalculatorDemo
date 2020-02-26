import React from "react";
import { App } from "./App/App";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {store} from './_helpers';
import "./Assets/Style/style.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

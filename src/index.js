import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App/App";
import React from "react";
import { createStore, combineReducers } from "redux";
import store from "./store";
//import calculateReducer from './reducers/calculateReducer'
import "./Assets/Style/style.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);

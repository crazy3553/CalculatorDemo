import React, { Component } from "react";
import { Calculator } from "../Component/Calculator";
import "babel-polyfill";
export class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

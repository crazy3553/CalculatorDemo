import React, { Component } from "react";
import { History } from "./History";
import { Result } from "./Result";
import { CalculateAction } from "../_actions";

let nextNumber = [];
export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      valuesForCalculation: [],
      Operator: ""
    };
    this.CommonCalculat = this.CommonCalculat.bind(this);
  }
  componentWillMount() {}
  CommonCalculat = e => {
    // CalculateAction.PerformCalculation(e.target.value);
    if (
      e.target.value != "c" &&
      e.target.value != "+/-" &&
      e.target.value != "%" &&
      e.target.value != "+" &&
      e.target.value != "-" &&
      e.target.value != "÷" &&
      e.target.value != "x" &&
      e.target.value != "="
    ) {
      nextNumber.push(e.target.value);
    } else {
      if (
        nextNumber.length > 0 ||
        e.target.value != "+/-" ||
        e.target.value != "c"
      ) {
        if (e.target.value != "c") {
          this.setState({
            Operator: e.target.value
          });
          nextNumber.push(e.target.value);
        }
        else{
          nextNumber.length=0;
        }
      }
    }
    this.setState({
      valuesForCalculation: [...nextNumber]
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="HistoryPanel">
            <History />
          </div>
          <div className="ResultPanel">
            <Result valueToBeCalculated={this.state.valuesForCalculation} />
          </div>
          <span className="gridDisplay">
            <button onClick={e => this.CommonCalculat(e)} value="c">
              C
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="+/-">
              +/-
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="%">
              %
            </button>
            <button
              className="rightOperator"
              value="÷"
              onClick={e => this.CommonCalculat(e)}
            >
              ÷
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="7">
              7
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="8">
              8
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="9">
              9
            </button>
            <button
              className="rightOperator"
              value="x"
              onClick={e => this.CommonCalculat(e)}
            >
              x
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="4">
              4
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="5">
              5
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="6">
              6
            </button>
            <button
              className="rightOperator"
              value="-"
              onClick={e => this.CommonCalculat(e)}
            >
              -
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="1">
              1
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="2">
              {" "}
              2
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="3">
              3
            </button>
            <button
              className="rightOperator"
              onClick={e => this.CommonCalculat(e)}
              value="+"
            >
              +
            </button>
            <button onClick={e => this.CommonCalculat(e)} value="0">
              0
            </button>
            <button onClick={e => this.CommonCalculat(e)} value=".">
              .
            </button>
            <button
              className="equals"
              onClick={e => this.CommonCalculat(e)}
              value="="
            >
              =
            </button>
          </span>
        </div>
      </div>
    );
  }
}

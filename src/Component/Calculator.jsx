import React, { Component } from "react";
import { History } from "./History";
import { Result } from "./Result";
import { CalculateAction } from "../_actions";
import { PerformCalculat } from "../Assets/util/PerformCalculation";
import { connect } from "react-redux";
import { store } from "../_helpers";

let nextNumber = [];
let displayHistory = "";
class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      valuesForCalculation: []
    };
    this.CommonCalculat = this.CommonCalculat.bind(this);
  }
  componentWillUpdate() {
    if (store.getState().calculateOperations.items != undefined) {
      displayHistory = store.getState().calculateOperations.items;
    }
  }
  CommonCalculat(e) {
    // CalculateAction.PerformCalculation(e.target.value);
    var resp = PerformCalculat.Calculation(e.target.value);
    if (e.target.value == "c") displayHistory = "";
    this.setState({
      valuesForCalculation: resp
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="HistoryPanel">
            {displayHistory != "" && <History histVal={displayHistory} />}
          </div>
          <div className="ResultPanel">
            <Result valueToBeCalculated={this.state.valuesForCalculation} />
          </div>
          <div className="gridDisplay">
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
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { showHistoryData } = state;
  return {
    showHistoryData
  };
}

const connectHistory = connect(mapStateToProps)(Calculator);
export { connectHistory as Calculator };

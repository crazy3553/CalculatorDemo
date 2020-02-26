import React, { Component } from "react";
import { connect } from "react-redux";
class Result extends Component {
  componentWillReceiveProps() {
       
  }
  render() {
    return (
      <div className="ResultPanelFonts">
        {this.props.valueToBeCalculated.length > 0
          ? this.props.valueToBeCalculated
          : 0}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { calculateData } = state;
  return {
    calculateData
  };
}

const connectResult = connect(mapStateToProps)(Result);
export { connectResult as Result };

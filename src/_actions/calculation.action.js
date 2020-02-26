import { calcConstants } from "../_constants";
export const CalculateAction = {
  PerformCalculation
};

function PerformCalculation(data) {
  return dispatch => {
    var calculateData = data;
    dispatch(request());
    dispatch(success(calculateData));
  };
  function request() {
    return { type: calcConstants.OPERATION_REQUEST };
  }
  function success(calculateData) {
    return { type: calcConstants.OPERATION_REQUEST_SUCCESS, calculateData };
  }
}

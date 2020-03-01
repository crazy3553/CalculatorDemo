import {calcConstants} from '../../src/_constants/operation.constants.js'
export const CalculateAction = {
  ShowHistory
};

function ShowHistory(showHistoryData) {
  return dispatch => {
    dispatch(success(showHistoryData));
  };
  function success(showHistoryData) {
    return { type: calcConstants.OPERATION_REQUEST_SUCCESS, showHistoryData };
  }
}

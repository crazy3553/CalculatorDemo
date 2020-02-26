var calcConstants = require("../_constants/operation.constants");
export function calculateOperations(state = {}, action) {
  switch (action.type) {
    case calcConstants.OPERATION_REQUEST:
      return {
        loading: true
      };
    case calcConstants.OPERATION_REQUEST_SUCCESS:
      return {
        items: { ...action.calculateData }
      };
    case calcConstants.OPERATION_REQUEST_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}

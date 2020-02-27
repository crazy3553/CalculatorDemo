let nextNumber = [];
export const Performcalculation = {
  calculation
};
function calculation(params) {
  // CalculateAction.PerformCalculation(params);
  if (
    params != "c" &&
    params != "+/-" &&
    params != "%" &&
    params != "+" &&
    params != "-" &&
    params != "÷" &&
    params != "x" &&
    params != "="
  ) {
    nextNumber.push(params);
  } else {
    if (nextNumber.length > 0 || params != "+/-" || params != "c") {
      if (params != "c") nextNumber.push(params);
      else nextNumber.length = 0;
      if(params==="="){
         debugger;
      }
    }
  }
  return nextNumber;
}

import { CalculateAction } from "../../_actions";
import { store } from "../../_helpers";
let nextNumber1 = "";
let operator = "";
export const PerformCalculat = {
  Calculation
};
function Calculation(params) {
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
    nextNumber1 = nextNumber1 + params;
  } else {
    if (nextNumber1.length > 0 && params != "c") {
      if (params != "%") {
        if (
          nextNumber1.includes("+") ||
          nextNumber1.includes("x") ||
          nextNumber1.includes("-") ||
          nextNumber1.includes("÷")
        ) {
          if (params == "=") {
            return String(viewRssult(nextNumber1, operator));
          }
        } else {
          if (params != "=" && params != ".") {
            nextNumber1 = nextNumber1 + params;
            operator = params;
          }
        }
      } else {
        var calPercentage = String(nextNumber1 / 100);
        nextNumber1 = "";
        return calPercentage;
      }
    } else {
      nextNumber1 = "";
      store.dispatch(CalculateAction.ShowHistory(""));
    }
  }
  return String(nextNumber1);
}
function viewRssult(number, operator) {
  switch (operator) {
    case "+":
      var a = number.indexOf("+");
      var num1 = parseFloat(number.substring(0, a));
      var num2 = parseFloat(number.substring(a, number.length));
      store.dispatch(CalculateAction.ShowHistory(number));
      nextNumber1 = "";
      //CalculateAction.ShowHistory(number);
      return num1 + num2;

    case "x":
      var a = number.indexOf("x");
      var num1 = parseFloat(number.substring(0, a));
      var num2 = parseFloat(number.substring(a + 1, number.length));
      store.dispatch(CalculateAction.ShowHistory(number));
      nextNumber1 = "";
      return num1 * num2;

    case "-":
      var a = number.indexOf("-");
      var num1 = parseFloat(number.substring(0, a));
      var num2 = parseFloat(number.substring(a + 1, number.length));
      store.dispatch(CalculateAction.ShowHistory(number));
      nextNumber1 = "";
      return num1 - num2;

    case "÷":
      var a = number.indexOf("÷");
      var num1 = parseFloat(number.substring(0, a));
      var num2 = parseFloat(number.substring(a + 1, number.length));
      store.dispatch(CalculateAction.ShowHistory(number));
      nextNumber1 = "";
      return num1 / num2;
  }
}

import { combineReducers } from "redux";
import {calculateOperations} from './CalculateOperations';

const rootReducer = combineReducers({
    calculateOperations
})

export default rootReducer;
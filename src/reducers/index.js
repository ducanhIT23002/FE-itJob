import {combineReducers} from "redux"
import AuthReducer from "./auth";
import JobReducer from "./jobs";
const allReducer = combineReducers({
    AuthReducer,
    JobReducer
})

export default allReducer;
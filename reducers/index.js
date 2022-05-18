import { combineReducers } from "redux";
import clients from "./clientsReducer";

const rootReducer = combineReducers({
    clients
})

export default rootReducer;
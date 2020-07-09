import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import exampleReducer from "./exampleReducer";

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        // rest of your reducers
        exampleReducer
    });

export default createRootReducer;

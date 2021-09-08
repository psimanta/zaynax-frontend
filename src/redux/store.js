import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./reducer";

const myStore = createStore(rootReducer, applyMiddleware(thunk));

export default myStore;
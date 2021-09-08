import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";

const myStore = createStore(rootReducer, applyMiddleware());

export default myStore;
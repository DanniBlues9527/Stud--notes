import { createStore, applyMiddleware, combineReducers } from "redux";

import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

import thunk from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
  he: countReducer,
  ren: personReducer,
});

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

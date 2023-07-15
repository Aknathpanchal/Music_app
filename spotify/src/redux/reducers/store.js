import { combineReducers } from "redux";
import musicReducer from "./musicReducer";

import { createStore } from "redux";

const reducers = combineReducers({
  musicReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

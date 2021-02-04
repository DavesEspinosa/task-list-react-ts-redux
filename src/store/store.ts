import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import listreducer from "./reducers/listReducer";
import notificationReducer from "./reducers/notificationReducer";

const rootReducer = combineReducers({
  list: listreducer,
  notification: notificationReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;

export default store;

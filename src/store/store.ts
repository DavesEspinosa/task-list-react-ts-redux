//!In here we need to combine our 2 reducers and create the store with createStore function. I am also using redux devtools extension to check in my browser which types has been dispatched. We also need to export RootState type, which is the typeof rootReducer, to use it in our components whenever we will use useSelector hook. And finally we can export our store as default.Store is now created and now we need to make it available in our app. Now let’s go back to index.tsx file and import Provider from react-redux and wrapp our App with it and add our store as a prop. We also need to import our store and since we are updating this file we can also import bulma and fontawesome.

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

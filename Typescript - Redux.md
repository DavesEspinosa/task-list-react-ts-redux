# Typescript - Redux

#### All inside the `store` folder:

1. Create the `types.ts`

   1.1. Exporting interfaces as type, and the State

2. Create the  `store.ts`

   2.2. 

   ```typescript
   import { createStore, combineReducers } from "redux";
   import { composeWithDevTools } from "redux-devtools-extension";
   
   import listreducer from "./reducers/listReducer";
   import notificationReducer from "./reducers/notificationReducer";
   
   const rootReducer = combineReducers({
     list: listreducer,
     notification: notificationReducer,
   });
   
   const store = createStore(rootReducer, composeWithDevTools());
   
   export type Rootstate = ReturnType<typeof rootReducer>;
   
   export default store;
   
   ```

3. At the `reducers` folder you import the interfaces as "Action" and the "State"

   ```typescript
   import { ListsAction, ListState } from "../types";
   
   const initialState: ListState = {
     lists: {},
     listIdToDelete: "",
     listToEdit: null,
     listById: null,
     selectedList: null,
     taskToDelete: null,
     taskToEdit: null,
   };
   
   export default (state = initialState, action: ListsAction): ListState => {
     switch (action.type) {
       default:
         return state;
     }
   };
   ```

4. Inside the `actions`  folder, related to the types interfaces called as actions:

   ```typescript
   import { NotificationAction, SET_NOTIFICATION } from "../types";
   
   export const setNotification = (msg: string, type: string = 'success'): NotificationAction => {
     return {
       type: SET_NOTIFICATION,
       payload: {
         msg,
         type
       }
     }
   }
   ```

5. Create the helpers functions inside the `reducer` folder, and adding the first cases to the reducer files. CHECK THE REDUCERS folder.

6. On `index.tsx` add the store:

   ```typescript
   import React from "react";
   import ReactDOM from "react-dom";
   import { Provider } from "react-redux";
   
   import "../node_modules/bulma/css/bulma.min.css";
   import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
   
   import App from "./App";
   import store from "./store/store";
   
   ReactDOM.render(
     <React.StrictMode>
       <Provider store={store}>
         <App />
       </Provider>
     </React.StrictMode>,
     document.getElementById("root")
   );
   
   ```

   
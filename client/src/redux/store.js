import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/userReducer";
import { alertsReducer } from "./reducers/alertsReducer";
import { postsReducer } from "./reducers/postsReducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  alertsReducer: alertsReducer,
  postsReducer: postsReducer,
});
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { alertsReducer } from "./reducers/alertsReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  alertsReducer: alertsReducer,
});
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsDenylist, actionsCreators and other options
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

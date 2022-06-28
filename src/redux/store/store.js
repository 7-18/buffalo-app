import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducers";
import { registerReducers } from "../reducers/registerReducers";
import { workourtsReducers } from "../reducers/workoutReducers";

const reducers = combineReducers({
  register: registerReducers,
  login: loginReducers,
  workouts: workourtsReducers,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

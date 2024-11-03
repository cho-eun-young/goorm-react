// reducer ==> Root (Sub reducers Combine 하나로 합친것)    Sub
// redux boilerplate

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import posts from "./posts";

const rootReduceer = combineReducers({
  counter,
  todos,
  posts,
});

export default rootReduceer;

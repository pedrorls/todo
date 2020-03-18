import { combineReducers } from "redux";
import tags from "./tags";
import tasks from "./tasks";

export default combineReducers({
  tags,
  tasks
});

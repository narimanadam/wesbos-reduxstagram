import { combineReducers } from "redux";
import { posts } from "../reducers/posts";
import { comments } from "../reducers/comments";

const rootReducer = combineReducers({
  posts,
  comments
});

export default rootReducer;

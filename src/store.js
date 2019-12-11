import { createStore } from "redux";
// import { syncHistoryWithStore } from "react-redux-router";

import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

const initialState = {
  posts,
  comments
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

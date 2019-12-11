import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/types";

export const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = {
        text: action.comment,
        user: action.author
      };
      console.log(state);
      return [...state[action.postCode], newComment];
    //   return [...state, action.postCode: newComment];
    case REMOVE_COMMENT:
    //   return [
    //     ...state.slice(0, action.index),
    //     ...state.slice(action.index + 1)
    //   ];
    default:
      return state;
  }
};

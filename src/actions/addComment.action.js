import { ADD_COMMENT } from "./types";

export const addComment = (postCode, author, comment) => ({
  type: ADD_COMMENT,
  postCode,
  author,
  comment
});

import { REMOVE_COMMENT } from "./types";

export const removeComment = (postId, index) => ({
  type: REMOVE_COMMENT,
  postId,
  index
});

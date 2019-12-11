import { INCREMENT_LIKES } from "./types";

export const increment = index => ({
  type: INCREMENT_LIKES,
  index
});

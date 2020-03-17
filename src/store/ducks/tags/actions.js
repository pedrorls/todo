import { TagsTypes } from "./types";

export const TagsActions = {
  getTags: () => ({
    type: TagsTypes.GET_TAGS,
    payload: undefined
  }),

  success: response => {
    return {
      type: TagsTypes.SUCCESS,
      payload: response
    };
  }
};

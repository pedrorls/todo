import { TagsTypes } from "./types";

export const TagsActions = {
  getTags: () => ({
    type: TagsTypes.GET_TAGS,
    payload: undefined
  }),

  createTag: params => ({
    type: TagsTypes.CREATE_TAG,
    payload: params
  }),

  success: response => ({
    type: TagsTypes.SUCCESS,
    payload: response
  }),

  success_create_tag: response => ({
    type: TagsTypes.SUCCESS_CREATE_TAG,
    payload: response
  })
};

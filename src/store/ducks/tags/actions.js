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

  deleteTag: params => ({
    type: TagsTypes.DELETE_TAG,
    payload: params
  }),

  success: response => ({
    type: TagsTypes.SUCCESS,
    payload: response
  }),

  successCreateTag: response => ({
    type: TagsTypes.SUCCESS_CREATE_TAG,
    payload: response
  }),

  successDeleteTag: response => ({
    type: TagsTypes.SUCCESS_DELETE_TAG,
    payload: response
  })
};

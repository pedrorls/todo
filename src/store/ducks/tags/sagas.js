import { call, put } from "@redux-saga/core/effects";
import { TagsApi } from "../../../api/TagsApi";
import { TagsActions } from "./actions";

export function* listTags() {
  try {
    const response = yield call(TagsApi.listTags);
    yield put(TagsActions.success(response));
  } catch (error) {
    throw new Error(error);
  }
}

export function* createTag(param) {
  try {
    const response = yield call(TagsApi.createTag, param.payload);
    yield put(TagsActions.success_create_tag(response));
  } catch (error) {
    throw new Error(error);
  }
}

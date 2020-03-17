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

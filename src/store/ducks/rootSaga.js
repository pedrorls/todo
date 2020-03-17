import { all, takeLatest } from "redux-saga/effects";
import { TagsTypes } from "./tags/types";
import { listTags, createTag } from "./tags/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(TagsTypes.GET_TAGS, listTags),
    takeLatest(TagsTypes.CREATE_TAG, createTag)
  ]);
}

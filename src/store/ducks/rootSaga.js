import { all, takeLatest } from "redux-saga/effects";
import { TagsTypes } from "./tags/types";
import { listTags, createTag } from "./tags/sagas";
import { TasksTypes } from "./tasks/types";
import { listTasks, createTask, deleteTask } from "./tasks/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(TagsTypes.GET_TAGS, listTags),
    takeLatest(TagsTypes.CREATE_TAG, createTag),
    takeLatest(TasksTypes.GET_TASKS, listTasks),
    takeLatest(TasksTypes.CREATE_TASK, createTask),
    takeLatest(TasksTypes.DELETE_TASK, deleteTask)
  ]);
}

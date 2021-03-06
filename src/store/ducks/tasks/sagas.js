import { call, put } from "@redux-saga/core/effects";
import { TasksApi } from "../../../api/";
import { TasksActions } from "./actions";

export function* listTasks(param) {
  try {
    const response = yield call(TasksApi.listTasks, param.payload);
    yield put(TasksActions.success(response));
  } catch (error) {
    throw new Error(error);
  }
}

export function* createTask(param) {
  try {
    const response = yield call(TasksApi.createTask, param.payload);
    yield put(TasksActions.successCreateTask(response));
  } catch (error) {
    throw new Error(error);
  }
}

export function* deleteTask(param) {
  try {
    const response = yield call(TasksApi.deleteTask, param.payload);
    yield put(TasksActions.successDeleteTask(response));
  } catch (error) {
    throw new Error(error);
  }
}

export function* updateTask(param) {
  try {
    const response = yield call(TasksApi.updateTask, param.payload);
    yield put(TasksActions.successUpdateTask(response));
  } catch (error) {
    throw new Error(error);
  }
}

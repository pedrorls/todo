import { TasksTypes } from "./types";

export const TasksActions = {
  getTasks: () => ({
    type: TasksTypes.GET_TASKS,
    payload: undefined
  }),

  createTask: params => ({
    type: TasksTypes.CREATE_TASK,
    payload: params
  }),

  success: response => ({
    type: TasksTypes.SUCCESS,
    payload: response
  }),

  success_create_task: response => ({
    type: TasksTypes.SUCCESS_CREATE_TASK,
    payload: response
  })
};

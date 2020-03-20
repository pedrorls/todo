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

  deleteTask: params => ({
    type: TasksTypes.DELETE_TASK,
    payload: params
  }),

  updateTask: params => ({
    type: TasksTypes.UPDATE_TASK,
    payload: params
  }),

  success: response => ({
    type: TasksTypes.SUCCESS,
    payload: response
  }),

  successCreateTask: response => ({
    type: TasksTypes.SUCCESS_CREATE_TASK,
    payload: response
  }),

  successDeleteTask: response => ({
    type: TasksTypes.SUCCESS_DELETE_TASK,
    payload: response
  }),

  successUpdateTask: response => ({
    type: TasksTypes.SUCCESS_UPDATE_TASK,
    payload: response
  })
};

import { TasksTypes } from "./types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  const copy = state.list.slice();
  switch (type) {
    case TasksTypes.SUCCESS:
      return { ...state, list: payload };

    case TasksTypes.SUCCESS_CREATE_TASK:
      copy.push(payload);
      return { ...state, list: copy };

    case TasksTypes.SUCCESS_DELETE_TASK:
      const new_lst = copy.filter(task => task.id !== payload.id);
      return { ...state, list: new_lst };
    default:
      return state;
  }
};

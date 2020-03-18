import { TasksTypes } from "./types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TasksTypes.SUCCESS:
      return { ...state, list: payload };

    case TasksTypes.SUCCESS_CREATE_TASK:
      const copy = state.list.slice();
      copy.push(payload);
      return { ...state, list: copy };

    default:
      return state;
  }
};

import { TagsTypes } from "./types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TagsTypes.SUCCESS:
      return { ...state, list: payload };

    case TagsTypes.SUCCESS_CREATE_TAG:
      const copy = state.list.slice();
      copy.push(payload);
      return { ...state, list: copy };

    default:
      return state;
  }
};

import { TagsTypes } from "./types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TagsTypes.SUCCESS:
      return { ...state, list: payload };

    default:
      return state;
  }
};

import { TagsTypes } from "./types";

const initialState = {
  list: []
};

export default (state = initialState, { type, payload }) => {
  const copy = state.list.slice();
  switch (type) {
    case TagsTypes.SUCCESS:
      return { ...state, list: payload };

    case TagsTypes.SUCCESS_CREATE_TAG:
      copy.push(payload);
      return { ...state, list: copy };

    case TagsTypes.SUCCESS_DELETE_TAG:
      const new_lst = copy.filter(tag => tag.id !== payload.id);
      return { ...state, list: new_lst };

    default:
      return state;
  }
};

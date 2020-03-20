const filterAll = state => {
  return state.tasks.list;
};

const filterDone = state => {
  return state.tasks.list.filter(task => task.finished);
};

const filterUndone = state => {
  return state.tasks.list.filter(task => !task.finished);
};

export const getTasksList = filterBy => {
  switch (filterBy) {
    case "all":
      return filterAll;

    case "done":
      return filterDone;

    case "undone":
      return filterUndone;

    default:
      break;
  }
};

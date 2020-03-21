import { groupBy } from "lodash";

const filterAll = state => {
  return groupBy(state.tasks.list, "dueDate");
};

const filterDone = state => {
  return groupBy(
    state.tasks.list.filter(task => task.finished),
    "dueDate"
  );
};

const filterUndone = state => {
  return groupBy(
    state.tasks.list.filter(task => !task.finished),
    "dueDate"
  );
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

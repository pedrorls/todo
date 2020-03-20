import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Icon, Checkbox } from "semantic-ui-react";
import { getTasksList } from "../store/ducks/tasks/selectors";
import { TasksActions } from "../store/ducks/tasks/actions";
import { EditTask } from "./modals";

export const TaskList = ({ filterBy }) => {
  const dispatch = useDispatch();
  const taskList = useSelector(getTasksList(filterBy));

  return (
    <List>
      {taskList.map(task => (
        <List.Item key={task.id}>
          <List.Content floated="right">
            <EditTask task={task} />
            <Button
              icon
              basic
              color="red"
              onClick={() => dispatch(TasksActions.deleteTask(task))}
            >
              <Icon name="trash" />
            </Button>
          </List.Content>
          <List.Content>
            <Checkbox
              label={task.description}
              checked={task.finished}
              onChange={() =>
                dispatch(TasksActions.updateTask({ ...task, finished: true }))
              }
            />
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Icon, Checkbox } from "semantic-ui-react";
import { getTasksList } from "../store/ducks/tasks/selectors";
import { TasksActions } from "../store/ducks/tasks/actions";
import { AddTask } from "./modals";

export const TaskList = ({ filterBy }) => {
  const dispatch = useDispatch();
  const taskList = useSelector(getTasksList(filterBy));

  return (
    <List>
      {taskList.map(task => (
        <List.Item key={task.id}>
          <List.Content floated="right">
            <AddTask task={task} editMode />
            <Button
              icon
              basic
              color="red"
              onClick={() => dispatch(TasksActions.deleteTask(task))}
            >
              <Icon name="trash" />
            </Button>
          </List.Content>
          <List.Content
            style={{ textDecoration: task.finished && "line-through " }}
          >
            <span className="checkbox">
              <Checkbox
                checked={task.finished}
                onChange={() =>
                  dispatch(
                    TasksActions.updateTask({
                      ...task,
                      finished: !task.finished
                    })
                  )
                }
              />
            </span>
            <List.Header as="h4">{task.description}</List.Header>
            <List.Description>{`Criado em: ${task.createdAt}`}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
};

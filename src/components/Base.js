import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Header, Input, Button } from "semantic-ui-react";

import { TagsActions } from "../store/ducks/tags/actions";
import { TasksActions } from "../store/ducks/tasks/actions";
import { AddTask, CreateTag } from "./modals";
import { Filters } from "./Filters";
import { TaskList } from "./TaskList";

export const Base = () => {
  const dispatch = useDispatch();
  const [filterBy, setFilterBy] = useState("all");

  useEffect(() => {
    dispatch(TagsActions.getTags());
    dispatch(TasksActions.getTasks());
  }, [dispatch]);

  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header as="h1" textAlign="center">
              My Task list
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={10} textAlign="center" verticalAlign="middle">
            <Input fluid icon="search" placeholder="Pesquisar tarefas" />
          </Grid.Column>
          <Grid.Column width={2}>
            <Button.Group>
              <AddTask />
              <CreateTag />
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={12}>
            <Filters setFilterBy={setFilterBy} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={12}>
            <TaskList filterBy={filterBy} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

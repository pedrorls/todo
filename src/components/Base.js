import React from "react";
import { Container, Grid, Header, Input } from "semantic-ui-react";
import { FilterTask, AddTask } from "./modals";

export const Base = props => {
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h1" textAlign="center">
              My Task list
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
            <AddTask />
          </Grid.Column>
          <Grid.Column width={10} textAlign="center" verticalAlign="middle">
            <Input fluid icon="search" placeholder="Pesquisar tarefas" />
          </Grid.Column>
          <Grid.Column width={1} textAlign="right">
            <FilterTask />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

import React from "react";
import { Container, Grid, Header, Input, Button } from "semantic-ui-react";
import { AddTask, CreateTag } from "./modals";
import { Filters } from "./Filters";

export const Base = props => {
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
            <Filters />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column width={12}></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

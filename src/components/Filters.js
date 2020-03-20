import React from "react";
import { Header, Button } from "semantic-ui-react";

export const Filters = ({ setFilterBy }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "spance-between",
        alignItems: "center"
      }}
    >
      <span>
        <Header as="h5">Mostrar: </Header>
        <Button.Group basic compact>
          <Button onClick={() => setFilterBy("all")}>Todos</Button>
          <Button onClick={() => setFilterBy("done")}>Finalizados</Button>
          <Button onClick={() => setFilterBy("undone")}>Não finalizados</Button>
        </Button.Group>
      </span>
      <span>
        <Header as="h5">Visualizar por:</Header>
        <Button.Group basic compact>
          <Button>Dia</Button>
          <Button>Semana</Button>
          <Button>Mês</Button>
        </Button.Group>
      </span>
    </div>
  );
};

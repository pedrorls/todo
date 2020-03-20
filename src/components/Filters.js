import React from "react";
import { Header, Button } from "semantic-ui-react";
import "./styles.css";

export const Filters = ({ setFilterBy }) => {
  return (
    <>
      <div className="showFilter">
        <Header as="h5">Mostrar: </Header>
        <Button.Group basic compact>
          <Button onClick={() => setFilterBy("undone")}>Não finalizados</Button>
          <Button onClick={() => setFilterBy("done")}>Finalizados</Button>
          <Button onClick={() => setFilterBy("all")}>Todos</Button>
        </Button.Group>
      </div>
      <div className="showFilter">
        <Header as="h5">Visualizar por:</Header>
        <Button.Group basic compact>
          <Button>Dia</Button>
          <Button>Semana</Button>
          <Button>Mês</Button>
        </Button.Group>
      </div>
    </>
  );
};

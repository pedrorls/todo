import React from "react";
import { Header, Button } from "semantic-ui-react";

export const Filters = () => {
  return (
    <>
      <Header as="h5">Filtrar por:</Header>
      <Button.Group basic compact>
        <Button>Finalizados</Button>
        <Button>Não finalizados</Button>
        <Button>Dia</Button>
        <Button>Semana</Button>
        <Button>Mês</Button>
      </Button.Group>
    </>
  );
};

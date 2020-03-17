import React from "react";
import { Modal, Popup, Button, Icon } from "semantic-ui-react";

export const FilterTask = props => {
  return (
    <Modal
      closeIcon
      size="mini"
      dimmer="inverted"
      trigger={
        <Button secondary icon>
          <Popup trigger={<Icon name="filter" />} content="Filtrar tarefas" />
        </Button>
      }
    >
      <Modal.Header>Filtrar tarefas</Modal.Header>
      <Modal.Content></Modal.Content>
    </Modal>
  );
};

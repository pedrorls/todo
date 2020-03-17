import React from "react";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";

export const AddTask = () => {
  return (
    <Modal
      closeIcon
      size="mini"
      dimmer="blurring"
      trigger={
        <Button primary icon>
          <Popup
            trigger={<Icon name="plus" />}
            content="Adicionar nova tarefa"
          />
        </Button>
      }
    >
      <Modal.Header>Criar nova tarefa</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            fluid
            id="form-input-description"
            label="Descrição"
            placeholder="Descrição"
            type="text"
          />
          <Form.Input
            fluid
            id="form-input-duedate"
            label="Data de Vencimento"
            placeholder="Data de Vencimento"
            type="date"
          />
          <Form.Dropdown
            fluid
            selection
            label="Lembrete"
            placeholder="Lembrete"
          />
          <Button primary type="submit">
            Criar tarefa
          </Button>
          <Button secondary floated="right">
            Cancelar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

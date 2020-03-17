import React from "react";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";

export const CreateTag = () => {
  return (
    <Modal
      closeIcon
      size="mini"
      dimmer="blurring"
      trigger={
        <Button primary basic icon>
          <Popup trigger={<Icon name="tag" />} content="Criar nova tag" />
        </Button>
      }
    >
      <Modal.Header>Criar nova tag</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            fluid
            id="form-input-tagname"
            label="Nome"
            placeholder="Nome da tag"
            type="text"
          />
          <Button primary type="submit">
            Criar tarefa
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

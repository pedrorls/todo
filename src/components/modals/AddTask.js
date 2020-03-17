import React from "react";
import { useSelector } from "react-redux";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";
import { getTagsList } from "../../store/ducks/tags/selectors";

export const AddTask = () => {
  const tagsList = useSelector(getTagsList);

  const tagsOptions = tagsList.map(tag => ({
    key: tag.id,
    value: tag.name,
    text: tag.name
  }));

  return (
    <Modal
      closeIcon
      size="mini"
      dimmer="blurring"
      trigger={
        <Button basic primary icon>
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
            multiple
            search
            selection
            label="Tags"
            placeholder="Tags"
            options={tagsOptions}
          />
          <Form.Dropdown
            fluid
            selection
            label="Lembrete"
            placeholder="Lembrete"
            options={[
              { value: "1hr", key: "1hr", text: "1 hora antes" },
              { value: "2hr", key: "2hr", text: "2  hora antes" },
              { value: "24hr", key: "24h", text: "1 dia antes" },
              { value: "48hr", key: "48hr", text: "2 dias antes" }
            ]}
          />
          <Button primary type="submit">
            Criar tarefa
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

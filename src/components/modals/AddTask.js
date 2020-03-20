import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";
import { getTagsList } from "../../store/ducks/tags/selectors";
import { TasksActions } from "../../store/ducks/tasks/actions";

export const AddTask = () => {
  const dispatch = useDispatch();
  const tagsList = useSelector(getTagsList);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState([]);
  const [reminder, setReminder] = useState("");

  const tagsOptions = tagsList.map(tag => ({
    key: tag.id,
    value: tag.name,
    text: tag.name
  }));

  const handleSubmit = () => {
    dispatch(TasksActions.createTask({ description, dueDate, tags, reminder }));
    setOpen(false);
  };

  return (
    <Modal
      size="mini"
      dimmer="blurring"
      open={open}
      trigger={
        <Button basic primary icon onClick={() => setOpen(true)}>
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
            onChange={(e, { value }) => setDescription(value)}
          />
          <Form.Input
            fluid
            id="form-input-duedate"
            label="Data de Vencimento"
            placeholder="Data de Vencimento"
            type="datetime-local"
            onChange={(e, { value }) => setDueDate(value)}
          />
          <Form.Dropdown
            fluid
            multiple
            search
            selection
            label="Tags"
            placeholder="Tags"
            options={tagsOptions}
            onChange={(e, { value }) => setTags(value)}
          />
          <Form.Dropdown
            fluid
            selection
            label="Lembrete"
            placeholder="Lembrete"
            options={[
              { value: 1, key: "1hr", text: "1 hora antes" },
              { value: 2, key: "2hr", text: "2  hora antes" },
              { value: 24, key: "24h", text: "1 dia antes" },
              { value: 48, key: "48hr", text: "2 dias antes" }
            ]}
            onChange={(e, { value }) => setReminder(value)}
          />
          <Button primary type="submit" onClick={handleSubmit}>
            Criar tarefa
          </Button>
          <Button secondary onClick={() => setOpen(false)} floated="right">
            Cancelar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

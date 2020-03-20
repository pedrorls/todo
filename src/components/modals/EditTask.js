import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Icon, Form } from "semantic-ui-react";
import { getTagsList } from "../../store/ducks/tags/selectors";
import { TasksActions } from "../../store/ducks/tasks/actions";

export const EditTask = ({ task }) => {
  const dispatch = useDispatch();
  const tagsList = useSelector(getTagsList);
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState([]);
  const [reminder, setReminder] = useState("");

  useEffect(() => {
    setDescription(task.description);
    setDueDate(task.dueDate);
    setTags(task.tags);
    setReminder(task.reminder);
  }, [task]);

  const tagsOptions = tagsList.map(tag => ({
    key: tag.id,
    value: tag.name,
    text: tag.name
  }));

  const handleSubmit = () => {
    dispatch(
      TasksActions.updateTask({ ...task, description, dueDate, tags, reminder })
    );
    setOpen(false);
  };

  return (
    <Modal
      size="mini"
      dimmer="blurring"
      open={open}
      trigger={
        <Button icon basic onClick={() => setOpen(true)}>
          <Icon name="edit" />
        </Button>
      }
      w
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
            value={description}
            onChange={(e, { value }) => setDescription(value)}
          />
          <Form.Input
            fluid
            id="form-input-duedate"
            label="Data de Vencimento"
            placeholder="Data de Vencimento"
            type="text"
            value={dueDate}
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
            value={tags}
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
            value={reminder}
            onChange={(e, { value }) => setReminder(value)}
          />
          <Button primary type="submit" onClick={handleSubmit}>
            Editar tarefa
          </Button>
          <Button secondary onClick={() => setOpen(false)} floated="right">
            Cancelar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

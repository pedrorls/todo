import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";
import { getTagsList } from "../../store/ducks/tags/selectors";
import { TasksActions } from "../../store/ducks/tasks/actions";

export const AddTask = ({ task, editMode }) => {
  const label = editMode ? "Editar Tarefa" : "Criar Tarefa";
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

  useEffect(() => {
    if (task !== undefined) {
      setDescription(task.description);
      setDueDate(task.dueDate);
      setTags(task.tags);
      setReminder(task.reminder);
    }
  }, [task]);

  const handleSubmit = () => {
    if (editMode) {
      dispatch(
        TasksActions.updateTask({
          ...task,
          description,
          dueDate,
          tags,
          reminder
        })
      );
    } else {
      dispatch(
        TasksActions.createTask({ description, dueDate, tags, reminder })
      );
    }

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
            trigger={<Icon name={editMode ? "edit" : "plus"} />}
            content={label}
          />
        </Button>
      }
    >
      <Modal.Header>{label}</Modal.Header>
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
            type="datetime-local"
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
              { value: 2, key: "2hr", text: "2  horas antes" },
              { value: 24, key: "24h", text: "1 dia antes" },
              { value: 48, key: "48hr", text: "2 dias antes" }
            ]}
            value={reminder}
            onChange={(e, { value }) => setReminder(value)}
          />
          <Button primary type="submit" onClick={handleSubmit}>
            {label}
          </Button>
          <Button secondary onClick={() => setOpen(false)} floated="right">
            Cancelar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

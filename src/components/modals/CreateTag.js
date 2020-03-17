import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Popup, Button, Icon, Form } from "semantic-ui-react";
import { TagsActions } from "../../store/ducks/tags/actions";

export const CreateTag = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    if (name !== "") {
      setOpen(false);
      dispatch(TagsActions.createTag(name));
    }
  };

  return (
    <Modal
      size="mini"
      dimmer="blurring"
      open={open}
      trigger={
        <Button primary basic icon onClick={() => setOpen(true)}>
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
            onChange={(e, { value }) => setName(value)}
          />
          <Button primary type="submit" onClick={handleOnClick}>
            Criar tarefa
          </Button>
          <Button secondary floated="right" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

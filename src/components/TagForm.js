import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "semantic-ui-react";
import { TagsActions } from "../store/ducks/tags/actions";

export const TagForm = ({ setOpen }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleOnClick = () => {
    if (name !== "") {
      setOpen(false);
      dispatch(TagsActions.createTag(name));
    }
  };

  return (
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
        Criar tag
      </Button>
      <Button secondary floated="right" onClick={() => setOpen(false)}>
        Cancelar
      </Button>
    </Form>
  );
};

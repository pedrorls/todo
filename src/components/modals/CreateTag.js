import React, { useState } from "react";
import { Modal, Popup, Button, Icon, Tab } from "semantic-ui-react";
import { TagsList } from "../TagList";
import { TagForm } from "../TagForm";

export const CreateTag = () => {
  const [open, setOpen] = useState(false);
  const panes = [
    {
      menuItem: "Criar tag",
      render: () => <TagForm setOpen={setOpen} />
    },
    {
      menuItem: "Lista de tags",
      render: () => <TagsList />
    }
  ];

  return (
    <Modal
      size="mini"
      dimmer="blurring"
      open={open}
      trigger={
        <Button primary basic icon onClick={() => setOpen(true)}>
          <Popup trigger={<Icon name="tag" />} content="Visualizar tags" />
        </Button>
      }
    >
      <Modal.Header>Tags</Modal.Header>
      <Modal.Content>
        <Tab menu={{ secondary: true }} panes={panes} />
      </Modal.Content>
    </Modal>
  );
};

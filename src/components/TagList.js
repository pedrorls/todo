import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Icon } from "semantic-ui-react";
import { getTagsList } from "../store/ducks/tags/selectors";
import { TagsActions } from "../store/ducks/tags/actions";

export const TagsList = () => {
  const dispatch = useDispatch();
  const tagsList = useSelector(getTagsList);

  return (
    <>
      <List>
        {tagsList.map(tag => (
          <List.Item key={tag.id}>
            <List.Content floated="right">
              <Button
                icon
                basic
                color="red"
                onClick={() => dispatch(TagsActions.deleteTag(tag))}
              >
                <Icon name="trash" />
              </Button>
            </List.Content>
            <List.Content>{tag.name}</List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};

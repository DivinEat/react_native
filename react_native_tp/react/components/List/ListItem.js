import React, {useContext} from 'react';
import {IconButton, List} from 'react-native-paper';
import {ListContext} from '../../contexts/ListContext';

export default function ListItem({item, onShow}) {
  const {deleteElement} = useContext(ListContext);

  return (
    <List.Item
      titleStyle={{color: 'black'}}
      descriptionStyle={{color: 'black'}}
      title={item.name + ' ' + item.type}
      right={props => (
        <>
          <IconButton
            icon="delete"
            size={20}
            color="black"
            onPress={() => deleteElement(item)}
          />
          <IconButton color="black" icon="pencil" size={20} onPress={onShow} />
        </>
      )}
    />
  );
}

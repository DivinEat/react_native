import React, {useContext, useEffect, useState} from 'react';
import Form from './Form';
import {View} from 'react-native';
import {ListContext} from "../../contexts/ListContext";
import {Portal, Dialog, Button} from 'react-native-paper';

export default function AddEditList({item = false}) {
  const [modal, setModal] = useState(item);
  const {addElement, editElement} = useContext(ListContext);

  useEffect(() => {
    setModal(item);
  }, [item]);

  const onSubmit = values => {
    if (modal === true) {
      addElement(values);
      setModal(false);
    } else {
      editElement(values);
    }
  };

  return (
    <View>
      <Button onPress={() => setModal(true)}>Add List</Button>
      <Portal>
        <Dialog visible={modal !== false} onDismiss={() => setModal(false)}>
          <Dialog.Title>Add List</Dialog.Title>
          <Dialog.Content>
            <Form onSubmit={onSubmit} selectedValue={modal} />
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

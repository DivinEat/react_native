import React, {useContext, useEffect, useState} from 'react';
import {ItemContext} from "../../../contexts/ItemContext";
import Form from './Form';
import {View} from "react-native";
import {Portal, Dialog, Button} from 'react-native-paper';

export default function AddEditItem({item = false}) {
    const [modal, setModal] = useState(item);
    const {addElement, editElement} = useContext(ItemContext);

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
            <Button onPress={() => setModal(true)}>Add Item</Button>
            <Portal>
                <Dialog visible={modal !== false} onDismiss={() => setModal(false)}>
                    <Dialog.Title>Add Item</Dialog.Title>
                    <Dialog.Content>
                        <Form onSubmit={onSubmit} selectedValue={modal} />
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    );
}

import React, {useContext} from 'react';
import {IconButton, List} from 'react-native-paper';
import {ItemContext} from "../../../contexts/ItemContext";

export default function ListItem({item}) {
    const {deleteElement} = useContext(ItemContext);

    return (
        <List.Item
            titleStyle={{color: 'black'}}
            descriptionStyle={{color: 'black'}}
            title={item.name + ' ' + item.date}
            right={props => (
                <>
                    <IconButton
                        icon="delete"
                        size={20}
                        color="black"
                        onPress={() => deleteElement(item)}
                    />
                </>
            )}
        />
    );
}

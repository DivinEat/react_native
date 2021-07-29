import React, {useContext} from 'react';
import ListItem from './ListItem';
import {ItemContext} from '../../../contexts/ItemContext';
import {FlatList} from 'react-native';

export default function List() {
  const {items, fetchItems, loading} = useContext(ItemContext);
  return (
    <FlatList
      data={items}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <ListItem item={item} />
      )}
      onRefresh={() => fetchItems(true)}
      refreshing={loading}
    />
  );
}

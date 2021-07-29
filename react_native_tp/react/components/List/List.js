import React, {useContext} from 'react';
import ListItem from './ListItem';
import {ListContext} from '../../contexts/ListContext';
import {FlatList} from 'react-native';

export default function List({onShow}) {
  const {list, fetchList, loading, page} = useContext(ListContext);
  return (
    <FlatList
      data={list}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <ListItem item={item} onShow={() => onShow(item)} />
      )}
      onRefresh={() => fetchList(undefined, true)}
      refreshing={loading}
      onEndReachedThreshold={0.7}
      onEndReached={() => fetchList({page: page + 1})}
    />
  );
}

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItems(list) {
  let data = JSON.parse((await AsyncStorage.getItem('items')) || '[]');
  return data.filter(_it => (_it.list_id === list._id));
}

export async function addItem(list, item) {
  let data = JSON.parse((await AsyncStorage.getItem('items')) || '[]');
  data = [...data, {_id: Date.now(), list_id: list.id, ...item}];
  await AsyncStorage.setItem('items', JSON.stringify(data));
  return item;
}
export async function deleteItem(item) {
  let data = JSON.parse((await AsyncStorage.getItem('items')) || '[]');
  data = data.filter(_it => _it._id !== item._id);
  await AsyncStorage.setItem('items', JSON.stringify(data));
  return true;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

export function getLists() {
  return AsyncStorage.getItem('lists').then(data => JSON.parse(data || '[]'));
}

export async function editList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = data.map(_it => (_it._id !== item._id ? _it : item));
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return item;
}

export async function addList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = [...data, {_id: Date.now(), ...item}];
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return item;
}
export async function deleteList(item) {
  let data = JSON.parse((await AsyncStorage.getItem('lists')) || '[]');
  data = data.filter(_it => _it._id !== item._id);
  await AsyncStorage.setItem('lists', JSON.stringify(data));
  return true;
}

import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {getItems, addItem, deleteItem} from './actions/items-storage';

export const ItemContext = createContext();

export default function ItemProvider({children}) {
  const [item, setItem] = useState([]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems(true).then(() => setReady(true));
  }, []);

  const fetchItems = useCallback(
    async (invalidate = false) => {
      setLoading(true);
      return getItems().then(data => {
        setLoading(false);
        setItem(invalidate ? data : [...item, data]);
      });
    }, [item]
  );

  const addElement = useCallback(
    async item => {
      const result = await addItem(item);
      setItem([...item, result]);
    },
    [item],
  );

  const deleteElement = useCallback(
    async item => {
      await deleteItem(item);
      setItem(item.filter(_it => _it._id !== item._id));
    },
    [item],
  );

  const getItem = useCallback(
    id => {
      return item.find(_it => _it._id === id);
    },
    [item],
  );

  return (
    <ItemContext.Provider
      value={{
        item,
        fetchItems,
        addElement,
        deleteElement,
        getItem,
        loading,
        isReady: ready,
      }}>
      {children}
    </ItemContext.Provider>
  );
}

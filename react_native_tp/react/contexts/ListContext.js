import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {getLists, editList, addList, deleteList} from './actions/lists-storage';

export const ListContext = createContext();

export default function ListProvider({children}) {
  const [list, setList] = useState([]);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchList(true).then(() => setReady(true));
  }, []);

  const fetchList = useCallback(
    async (invalidate = false) => {
      setLoading(true);
      return getLists().then(data => {
        setLoading(false);
        setList(invalidate ? data : [...list, data]);
      });
    }, [list]
  );

  const addElement = useCallback(
    async item => {
      const result = await addList(item);
      setList([...list, result]);
    },
    [list],
  );

  const deleteElement = useCallback(
    async item => {
      await deleteList(item);
      setList(list.filter(_it => _it._id !== item._id));
    },
    [list],
  );

  const editElement = useCallback(
    async item => {
      const result = await editList(item);
      setList(list.map(_it => (_it._id !== result._id ? _it : result)));
      //)
    },
    [list],
  );

  const getItem = useCallback(
    id => {
      return list.find(_it => _it._id === id);
    },
    [list],
  );

  return (
    <ListContext.Provider
      value={{
        list,
        fetchList,
        addElement,
        deleteElement,
        editElement,
        getItem,
        loading,
        isReady: ready,
      }}>
      {children}
    </ListContext.Provider>
  );
}

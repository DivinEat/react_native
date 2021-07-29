import React, {useState} from 'react';
import ListProvider from '../contexts/ListContext';
import {default as ListList} from '../components/List/List';
import {default as ItemList} from '../components/List/Item/List';
import AddEditList from '../components/List/AddEditList';
import ItemProvider from "../contexts/ItemContext";
import AddEditItem from "../components/List/Item/AddEditItem";

export default function ListScreen() {
  const [selectedList, setSelectedItem] = useState();
  const handleShowList = (list) => setSelectedItem(list);

  return (
    <ListProvider>
        {selectedList == null && (
            <>
                  <AddEditList selectedList={selectedList} />
                  <ListList onShow={handleShowList} />
            </>
        )}

        {selectedList != null && (
            <>
              <ItemProvider>
                  <AddEditItem selectedList={selectedList} />
                  <ItemList />
              </ItemProvider>
            </>
        )}
    </ListProvider>
  );
}

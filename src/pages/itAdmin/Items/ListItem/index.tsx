import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../../../components/ItAdmin/Item/List";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import { AppState } from "../../../../store/configureStore";
import { getItem, getItems } from "../../../../store/ItAdmin/Item/actions";
import { IStateItem } from "../../../../store/ItAdmin/Item/type";


const ListItem = () => {
  const { items }: { items: IStateItem[] } = useSelector(
    (state: AppState) => state.item
  );

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getItems());
    
  }, []);

  

  return (
    <ItAdminLayout>
      <ItemList items={items} />
    </ItAdminLayout>
  );
};

export default ListItem;

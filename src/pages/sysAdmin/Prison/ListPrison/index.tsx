import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SysAdminLayout from "../../../../components/Layout/SysAdmin";
import PrisonList from "../../../../components/SysAdmin/Prison/List";
// import { getItems } from "../../../../store/manager/item/actions";
// import { IItem } from "../../../../store/manager/item/types";
import { AppState } from "../../../../store/configureStore";
import { getPrisons } from "../../../../store/SysAdmin/Prison/actions";
import { IStatePrison } from "../../../../store/SysAdmin/Prison/type";
// import ManagerLayout from "../../../../components/Layout/Manager";
// import ItemList from "../../../../components/Manager/Items/List";

const ListPrison = () => {
  const { prisons }: { prisons: IStatePrison } = useSelector(
    (state: AppState) => state.prison
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPrisons());
  }, []);

  

  return (
    <SysAdminLayout>
      <PrisonList prisons={prisons} />
    </SysAdminLayout>
  );
};

export default ListPrison;

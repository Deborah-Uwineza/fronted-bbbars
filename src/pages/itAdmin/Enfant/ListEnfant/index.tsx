import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EnfantList from "../../../../components/ItAdmin/Enfant/List";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import { AppState } from "../../../../store/configureStore";
import { getEnfants } from "../../../../store/ItAdmin/Enfant/actions";
import { IStateEnfant } from "../../../../store/ItAdmin/Enfant/type";



const ListEnfant = () => {
  const { enfants }: { enfants: IStateEnfant[] } = useSelector(
    (state: AppState) => state.enfant
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getEnfants());
  }, []);

  

  return (
    <ItAdminLayout>
      <EnfantList enfants={enfants} />
    </ItAdminLayout>
  );
};

export default ListEnfant;

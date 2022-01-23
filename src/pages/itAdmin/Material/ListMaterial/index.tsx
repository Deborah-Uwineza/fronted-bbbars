import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import { AppState } from "../../../../store/configureStore";
import { getMaterial } from "../../../../store/ItAdmin/Material/actions";
import { IStateMaterial } from "../../../../store/ItAdmin/Material/type";
import MaterialList from "../../../../components/ItAdmin/Material/List";

const ListMaterial = () => {
  const { materials }: { materials: IStateMaterial[] } = useSelector(
    (state: AppState) => state.material
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMaterial());
  }, []);

  

  return (
    <ItAdminLayout>
      <MaterialList materials={materials} />
    </ItAdminLayout>
  );
};

export default ListMaterial;

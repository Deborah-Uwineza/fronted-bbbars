import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SupportList from "../../../../components/Citizen/Support/List";
import CitizenLayout from "../../../../components/Layout/Citizens";
import { getSupports } from "../../../../store/Citizen/Support/actions";
import { IStateSupport } from "../../../../store/Citizen/Support/type";
import { AppState } from "../../../../store/configureStore";



const ListSupport = () => {
  const { supports }: { supports: IStateSupport[] } = useSelector(
    (state: AppState) => state.support
  );
console.log(supports);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSupports());
  }, []);

  

  return (
    <CitizenLayout>
      <SupportList supports={supports} />
    </CitizenLayout>
  );
};

export default ListSupport;

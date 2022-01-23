import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CitizenLayout from "../../../../components/Layout/Citizens";
import { IStateAdopter } from "../../../../store/Citizen/Adopter/type";
import { AppState } from "../../../../store/configureStore";
import { getAdopters } from "../../../../store/Citizen/Adopter/actions";
import AdopterList from "../../../../components/Citizen/Adopter/List";
const ListAdopter = () => {
  const { adopters }: { adopters: IStateAdopter[] } = useSelector(
    (state: AppState) => state.adopter
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAdopters());
  }, []);

  

  return (
    <CitizenLayout>
      <AdopterList adopters={adopters} />
    </CitizenLayout>
  );
};

export default ListAdopter;

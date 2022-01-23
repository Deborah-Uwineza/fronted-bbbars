import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useState,
    MouseEvent,
  } from "react";
  import { useLocation } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { AppState } from "../../../../store/configureStore";
 import { createAdopter, getAdopter } from "../../../../store/Citizen/Adopter/actions";
import AddAdopter from "../../../../components/Citizen/Adopter/AddAdopter";
import CitizenLayout from "../../../../components/Layout/Citizens";
import { IErrors, IModalState, IStateAdopter } from "../../../../store/Citizen/Adopter/type";
import { IStateEnfant } from "../../../../store/ItAdmin/Enfant/type";
import { getEnfant } from "../../../../store/ItAdmin/Enfant/actions";
import UpdateAdopter from "../../../../components/Citizen/Adopter/UpdateAdopter";

const countrys = [
  {
    value: "rwanda",
    label: "rwanda",
  },  
  {
    value: "burundi",
    label: "burundi",
  },
  {
    value: "congo",
    label: "congo",
  },
  {
    value: "tanzania",
    label: "tanzania",
  },
 
];
  




  const EditAdopter = () => {
    const { adopter }: { adopter: IStateAdopter[] } = useSelector(
      (state: AppState) => state.adopter
    );
    React.useEffect(() => {
      dispatch(getAdopter());
      
    }, []);
  
    const dispatch = useDispatch();
  
    const adopterReducer = useSelector((state: AppState) => state.adopter);
  
  
    const [state, setState] = useState<IStateAdopter>({
      nationId:"",
      country:"",
      enfantId:"",
    });
    const { enfants }: { enfants: IStateEnfant[] } = useSelector(
      (state: AppState) => state.enfant
    );
    React.useEffect(() => {
      dispatch(getEnfant());
      
    }, []);
  
    const {
      configMenuErrors,
      adopterMessage,
    }: {
      configMenuErrors: IErrors;
      adopterMessage: string;
    } = useSelector((state: AppState) => state.adopter);
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStateAdopter = {
        nationId:state.nationId,
        country:state.country,
       enfantId:state.enfantId,
      };

      dispatch(UpdateAdopter(data));
      setModalState({ ...modalState, open: true });
    };
  
    const [modalState, setModalState] = useState<IModalState>({
      open: false,
    });
  
    const handleClose = (event: MouseEvent<HTMLElement>) => {
      setModalState({ ...modalState, open: false });
    };
  
    const location: any = useLocation().pathname;
  
    return (
      <CitizenLayout>
        <UpdateAdopter
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          adopterMessage={adopterMessage}
          configMenuErrors={configMenuErrors}
          enfants={enfants}
          countrys={countrys}
          adopter={adopter}
          setState={setState}
        />
      </CitizenLayout>
    );
  };
  
  export default EditAdopter;
  
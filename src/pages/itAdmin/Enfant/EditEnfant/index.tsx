/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useState,
    MouseEvent,
  } from "react";
  import { useLocation, useParams } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { AppState } from "../../../../store/configureStore";
import { IErrors, IModalState, IStateEnfant } from "../../../../store/ItAdmin/Enfant/type";
import AddEnfant from "../../../../components/ItAdmin/Enfant/AddEnfant";
import {getEnfant, getEnfants } from "../../../../store/ItAdmin/Enfant/actions";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import UpdateEnfant from "../../../../components/ItAdmin/Enfant/UpdateEnfant";
interface RouteParams {
  id: string;
}
const statuses = [
  {
    value: "ADOPTER",
    label: "ADOPTER",
  },
  {
    value: "HAS_FAMILY",
    label: "HAS_FAMILY",
  },
  {
    value: "OUT",
    label: "OUT",
  },
  {
    value: "GOT_FAMILY",
    label: "GOT_FAMILY",
  },
 
];
  
  const EditEnfant = () => {
    const { enfant }: { enfant: IStateEnfant } = useSelector(
      (state: AppState) => state.enfant
    );
  
    const params = useParams<RouteParams>();
  
  
    React.useEffect(() => {
      dispatch(getEnfant(params.id));
      
    }, []);

  
    const dispatch = useDispatch();
  
    const enfantReducer = useSelector((state: AppState) => state.enfant);
    console.log(enfant);
  
    const [state, setState] = useState<IStateEnfant>({
      names:"",
      parentNames:"",
      age:"",
      country:"",
      reasons:"",
      image:"",
      status:"",  
   
    }); 

      const {
        configMenuErrors,
        enfantMessage,
      }: {
        configMenuErrors: IErrors;
        enfantMessage: string;
      } = useSelector((state: AppState) => state.enfant);


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStateEnfant = {
        names:state.names,
      parentNames:state.parentNames,
      age:state.age,
      country:state.country,
      reasons:state.reasons,
      image:state.image,
      status:state.status,
      };

      dispatch(UpdateEnfant(params.id,data));
      setModalState({ ...modalState, open: true });
    };
  
    const [modalState, setModalState] = useState<IModalState>({
      open: false,
    });
  
    const handleClose = (event: MouseEvent<HTMLElement>) => {
      setModalState({ ...modalState, open: false });
    };
  
    //const location: any = useLocation().pathname;
  
    return (
      <ItAdminLayout>
        <UpdateEnfant
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          enfantMessage={enfantMessage}
          configMenuErrors={configMenuErrors}
          statuses={statuses}
          setState={setState}
          enfant={enfant}
          
        />
      </ItAdminLayout>
    );
  };
  
  export default EditEnfant;
  
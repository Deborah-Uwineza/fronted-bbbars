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
import AddPrison from "../../../../components/SysAdmin/Prison/AddPrison";
import SysAdminLayout from "../../../../components/Layout/SysAdmin";
import { IErrors, IModalState, IStatePrison } from "../../../../store/SysAdmin/Prison/type";
import { createPrison } from "../../../../store/SysAdmin/Prison/actions";


  




  const CreatePrison = () => {

  
    const dispatch = useDispatch();
  
    const prisonReducer = useSelector((state: AppState) => state.prison);
  
  
    const [state, setState] = useState<IStatePrison>({
        names: "",
        location: "",
        username: "",
        password :"",
        email:"",
        phone:"",
    });
  
    const {
      configMenuErrors,
      prisonMessage,
    }: {
      configMenuErrors: IErrors;
      prisonMessage: string;
    } = useSelector((state: AppState) => state.prison);
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStatePrison = {
        names: state.names,
        location: state.location,
        username: state.username,
        email:state.email,
        phone:state.phone,
        password:state.password
      };

      dispatch(createPrison(data));
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
      <SysAdminLayout>
        <AddPrison
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          prisonMessage={prisonMessage}
          configMenuErrors={configMenuErrors}
        />
      </SysAdminLayout>
    );
  };
  
  export default CreatePrison;
  
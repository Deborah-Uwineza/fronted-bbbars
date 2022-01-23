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
import { IErrors, IModalState, IStateSupport } from "../../../../store/Citizen/Support/type";
import CitizenLayout from "../../../../components/Layout/Citizens";
import UpdateSupport from "../../../../components/Citizen/Support/UpdateSupport";
import { getSupport } from "../../../../store/Citizen/Support/actions";

  




  const EditSupport = () => {
    const { support }: { support: IStateSupport[] } = useSelector(
      (state: AppState) => state.support
    );
    React.useEffect(() => {
      dispatch(getSupport());
      
    }, []);
    const dispatch = useDispatch();
  
    const supportReducer = useSelector((state: AppState) => state.support);
  
  
    const [state, setState] = useState<IStateSupport>({
      National_Id:"",
    
      country:"",
     
      city:"",
     
      gender:"",
      
      dob:"",
      
      supportType:"",
    });
  
    const {
      configMenuErrors,
      supportMessage,
    
    }: {
      configMenuErrors: IErrors;
      supportMessage: string;
    } = useSelector((state: AppState) => state.support);

    
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStateSupport = {
        National_Id:state.National_Id,
    
        country:state.country,
       
        city:state.city,
       
        gender:state.gender,
        
        dob:state.dob,
        
        supportType:state.supportType,
      };

      dispatch(UpdateSupport(data));
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
        <UpdateSupport
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          supportMessage={supportMessage}
          configMenuErrors={configMenuErrors}
          setState={setState}
          support={support}
        />
      </CitizenLayout>
    );
  };
  
  export default EditSupport;
  
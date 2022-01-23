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
import { IErrors, IModalState, IStateItem } from "../../../../store/ItAdmin/Item/type";
import { createItem } from "../../../../store/ItAdmin/Item/actions";
import AddItem from "../../../../components/ItAdmin/Item/AddItem";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";


const statuses = [
  {
    value: "ACTIVE",
    label: "ACTIVE",
  },
  {
    value: "IN_ACTIVE",
    label: "IN_ACTIVE",
  },
 
 
];




  const CreateItem = () => {

  
    const dispatch = useDispatch();
  
    const itemReducer = useSelector((state: AppState) => state.item);
  
  
    const [state, setState] = useState<IStateItem>({
        name: "",
        description: "",
        image: "",
        status:"",
    });
  
    const {
      configMenuErrors,
      itemMessage,
    }: {
      configMenuErrors: IErrors;
      itemMessage: string;
    } = useSelector((state: AppState) => state.item);
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStateItem = {

        name: state.name,
        description: state.description,
        status: state.status,
        image:state.image,
       
      };

      dispatch(createItem(data));
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
      <ItAdminLayout>
        <AddItem
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          itemMessage={itemMessage}
          configMenuErrors={configMenuErrors}
          statuses={statuses}
        />
      </ItAdminLayout>
    );
  };
  
  export default CreateItem;
  
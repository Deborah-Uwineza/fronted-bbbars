import React, {
    ChangeEvent,
    FormEvent,
    useEffect,
    useState,
    MouseEvent,
  } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { AppState } from "../../../../store/configureStore";
import { IErrors, IModalState, IStateItem } from "../../../../store/ItAdmin/Item/type";
import {  getItem, getItems, updateItem } from "../../../../store/ItAdmin/Item/actions";

import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import UpdateItem from "../../../../components/ItAdmin/Item/UpdateItem";

import { useLocation, useParams } from "react-router-dom";

interface RouteParams {
  id: string;
}

  


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




  const EditItem = () => {
    const { item }: { item: IStateItem } = useSelector(
      (state: AppState) => state.item
    );
  
    
  
    const params = useParams<RouteParams>();

    React.useEffect(() => {
      dispatch(getItem(params.id));
      
    }, []);
  
   
    const dispatch = useDispatch();
  
    const itemReducer = useSelector((state: AppState) => state.item);
   console.log(item);

  
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

      dispatch(updateItem(params.id ,data));
      setModalState({ ...modalState, open: true });
    };
  
    const [modalState, setModalState] = useState<IModalState>({
      open: false,
    });
  
    const handleClose = (event: MouseEvent<HTMLElement>) => {
      setModalState({ ...modalState, open: false });
    };
  
    // const location: any = useLocation().pathname;
  
    return (
      <ItAdminLayout>
        <UpdateItem
        
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          itemMessage={itemMessage}
          configMenuErrors={configMenuErrors}
          statuses={statuses}
          setState={setState}
          item={item}
        />
      </ItAdminLayout>
    );
  };
  
  export default EditItem;
  
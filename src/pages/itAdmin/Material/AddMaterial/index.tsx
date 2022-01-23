import React, {
    ChangeEvent,
    FormEvent,
    useState,
    MouseEvent,
  } from "react";
  import { useLocation } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { AppState } from "../../../../store/configureStore";
import AddMaterial from "../../../../components/ItAdmin/Material/AddMaterial";
import ItAdminLayout from "../../../../components/Layout/ItAdmin";
import { IErrors, IModalState, IStateMaterial } from "../../../../store/ItAdmin/Material/type";
import { createMaterial } from "../../../../store/ItAdmin/Material/actions";
import { getItems } from "../../../../store/ItAdmin/Item/actions";
import { IStateItem } from "../../../../store/ItAdmin/Item/type";

  

const statuses = [
  {
    value: "REQUEST",
    label: "REQUEST",
  },
  {
    value: "RECEIVED",
    label: "RECEIVED",
  },
 
];


  const CreateMaterial = () => {

  
    const dispatch = useDispatch();
  
    const materialReducer = useSelector((state: AppState) => state.material);
  
 

    const [state, setState] = useState<IStateMaterial>({
      PropertiesNo:"",
      quality:"",
      itemId:"",
      quantity:"",
      status:"",
    });

    const { items }: { items: IStateItem[] } = useSelector(
    (state: AppState) => state.item
  );



  React.useEffect(() => {
    dispatch(getItems());
    
  }, []);

  
    const {
      configMenuErrors,
      materialMessage,
    }: {
      configMenuErrors: IErrors;
      materialMessage: string;
    } = useSelector((state: AppState) => state.material);
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState({ ...state, [name]: value });
    };
  
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data: IStateMaterial = {
        PropertiesNo:state.PropertiesNo,
        itemId:state.itemId,
        quality:state.quality,
        quantity:state.quantity,
        status:state.status,
      };

      dispatch(createMaterial(data));
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
        <AddMaterial
          onChange={onChange}
          state={state}
          onSubmit={onSubmit}
          handleClose={handleClose}
          modalState={modalState}
          materialMessage={materialMessage}
          configMenuErrors={configMenuErrors}
          items={items}
          statuses={statuses}
        />
      </ItAdminLayout>
    );
  };
  
  export default CreateMaterial;
  
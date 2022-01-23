export const ERRORS = "ERRORS";
export const GET_ALL_ADOPTER = "GET_ALL_ADOPTER";
export const CREATE_ADOPTER = "CREATE_ADOPTER";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_ADOPTER = "UPDATE_ADOPTER";
// export const DELETE_ADOPTER = "DELETE_ADOPTER";
export const GET_ADOPTER = "GET_ADOPTER";


export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

  export type IModalState = {
    open: boolean;
  };
  export type IStateAdopter = {
   
    nationId:string;

  country:string;
  
  enfantId:string;
  enfant?:string;
  };
  


interface IICreateAdopter {
  type: typeof CREATE_ADOPTER;
  payload: {
    adopterMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     itemMessage: string;
//   };
// }

interface IUpdateAdopter {
  type: typeof UPDATE_ADOPTER;
  payload: {
    adopterMessage: string;
  };
}

// interface IIDeleteItem{
//   type: typeof DELETE_ITEM;
//   payload:{
//     itemDeleteMessage:string;
//   }
// }

interface IAdopterList {
  type: typeof GET_ALL_ADOPTER;
  payload: {
    adopters: IStateAdopter;
  };

}
interface IGetAdopter {
  type: typeof GET_ADOPTER;
  payload: {
    adopter: IStateAdopter;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type AdopterType = IWriteErrors |  IICreateAdopter | IAdopterList | IUpdateAdopter |IGetAdopter  ;

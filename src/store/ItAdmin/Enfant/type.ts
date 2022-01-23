export const ERRORS = "ERRORS";
export const GET_ALL_ENFANT = "GET_ALL_ENFANT";
export const CREATE_ENFANT = "CREATE_ENFANT";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_ENFANT = "UPDATE_ENFANT";
// export const DELETE_ITEM = "DELETE_ITEME";
export const GET_ENFANT = "GET_ENFANT";

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
  export type IStateEnfant = {
    names:string;
     parentNames:string;
    age:string;
    country:string;
    reasons:string;
    image:string;
    status:string;
  };
  


interface IICreateEnfant {
  type: typeof CREATE_ENFANT;
  payload: {
    enfantMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     itemMessage: string;
//   };
// }

interface IUpdateEnfant {
  type: typeof UPDATE_ENFANT;
  payload: {
    enfantMessage: string;
  };
}

// interface IIDeleteItem{
//   type: typeof DELETE_ITEM;
//   payload:{
//     itemDeleteMessage:string;
//   }
// }

interface IEnfantList {
  type: typeof GET_ALL_ENFANT;
  payload: {
    enfants: IStateEnfant;
  };
}

interface IGetEnfant {
  type: typeof GET_ENFANT;
  payload: {
    enfant: IStateEnfant;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type EnfantType = IWriteErrors |  IICreateEnfant | IEnfantList |IUpdateEnfant |IGetEnfant ;

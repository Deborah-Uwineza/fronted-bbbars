export const ERRORS = "ERRORS";
export const GET_ALL_PRISONS = "GET_ALL_PRISONS";
export const CREATE_PRISON = "CREATE_PRISON";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_PRISON = "UPDATE_PRISON";
// export const DELETE_ITEM = "DELETE_ITEME";
export const GET_PRISON = "GET_PRISON";

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
  export type IStatePrison = {
    names: string;
    location: string;
    username: string;
    password :string;
    email:string;
    phone:string;
  id?:string;
  };
  


interface IICreatePrison {
  type: typeof CREATE_PRISON;
  payload: {
    prisonMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     itemMessage: string;
//   };
// }

interface IUpdatePrison {
  type: typeof UPDATE_PRISON;
  payload: {
    prisonMessage: string;
  };
}

// interface IIDeleteItem{
//   type: typeof DELETE_ITEM;
//   payload:{
//     itemDeleteMessage:string;
//   }
// }

interface IPrisonList {
  type: typeof GET_ALL_PRISONS;
  payload: {
    prisons: IStatePrison;
  };
}

interface IGetPrison {
  type: typeof GET_PRISON;
  payload: {
    prison: IStatePrison;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type PrisonType = IWriteErrors |  IICreatePrison | IPrisonList |IUpdatePrison |IGetPrison ;

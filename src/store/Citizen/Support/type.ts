export const ERRORS = "ERRORS";
export const GET_ALL_SUPPORT = "GET_ALL_SUPPORT";
export const CREATE_SUPPORT = "CREATE_SUPPORT";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_SUPPORT = "UPDATA_SUPPORT";
// export const DELETE_SUPPORT = "DELETE_SUPPORT";
export const GET_SUPPORT = "GET_SUPPORT";

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
  export type IStateSupport = {
    National_Id:string;
    
    country:string;
   
    city:string;
   
    gender:string;
    
   dob:string ;
    
    supportType:string;
  };
  


interface IICreateSupport {
  type: typeof CREATE_SUPPORT;
  payload: {
    supportMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     itemMessage: string;
//   };
// }

interface IUpdateSupport {
  type: typeof UPDATE_SUPPORT;
  payload: {
    supportMessage: string;
  };
}

// interface IIDeleteItem{
//   type: typeof DELETE_ITEM;
//   payload:{
//     itemDeleteMessage:string;
//   }
// }

interface ISupportList {
  type: typeof GET_ALL_SUPPORT;
  payload: {
    supports: IStateSupport;
  };
}

interface IGetSupport {
  type: typeof GET_SUPPORT;
  payload: {
    support: IStateSupport;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type supportType = IWriteErrors |  IICreateSupport | ISupportList |IGetSupport |IUpdateSupport ;

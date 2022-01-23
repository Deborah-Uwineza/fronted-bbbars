export const ERRORS = "ERRORS";
export const GET_ALL_MATERIAL = "GET_ALL_MATERIAL";
export const CREATE_MATERIAL = "CREATE_MATERIAL";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_MATERIAL = "UPDATE_MATERIAL";
export const DELETE_MATERIAL = "DELETE_MATERIAL";
export const GET_MATERIAL = "GET_MATERIAL";

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
  export type IStateMaterial = {
  PropertiesNo:string;
  quality:string;
  quantity:string;
  status:string;
  itemId:string;
  item?:string;
  name?:string;
  };
  


interface IICreateMaterial {
  type: typeof CREATE_MATERIAL;
  payload: {
    materialMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     materialMessage: string;
//   };
// }

interface IUpdateMaterial {
  type: typeof UPDATE_MATERIAL;
  payload: {
    materialMessage: string;
  };
}

// interface IIDeleteMaterial{
//   type: typeof DELETE_MATERIAL;
//   payload:{
//     materialDeleteMessage:string;
//   }
// }

interface IMaterialList {
  type: typeof GET_ALL_MATERIAL;
  payload: {
    materials: IStateMaterial;
  };
}

interface IGetMaterial {
  type: typeof GET_MATERIAL;
  payload: {
    material: IStateMaterial;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type MaterialType = IWriteErrors |  IICreateMaterial | IMaterialList |IUpdateMaterial |IGetMaterial;

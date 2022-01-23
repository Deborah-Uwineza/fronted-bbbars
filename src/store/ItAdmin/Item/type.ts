export const ERRORS = "ERRORS";
export const GET_ALL_ITEM = "GET_ALL_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
// export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_ITEM = "UPDATE_ITEM";
// export const DELETE_ITEM = "DELETE_ITEME";
export const GET_ITEM = "GET_ITEM";

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

  export type IStateItem = {
    name: string;
    description: string;
    image?:string;
    status?:string;
  id?:string;
  };
  


interface IICreateItem {
  type: typeof CREATE_ITEM;
  payload: {
    itemMessage: string;
  };
}

// interface IUploadImage {
//   type: typeof UPLOAD_IMAGE;
//   payload: {
//     itemMessage: string;
//   };
// }

interface IUpdateItem {
  type: typeof UPDATE_ITEM;
  payload: {
    itemMessage: string;
  };
}

// interface IIDeleteItem{
//   type: typeof DELETE_ITEM;
//   payload:{
//     itemDeleteMessage:string;
//   }
// }

interface IItemList {
  type: typeof GET_ALL_ITEM;
  payload: {
    items: IStateItem;
  };
}

interface IGetItem {
  type: typeof GET_ITEM;
  payload: {
    item: IStateItem;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ItemType = IWriteErrors |  IICreateItem | IItemList |IGetItem |IUpdateItem;

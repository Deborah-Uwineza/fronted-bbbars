import {
    ERRORS,
    ItemType,
    GET_ALL_ITEM,
    CREATE_ITEM,
    // DELETE_ITEM,
    GET_ITEM,
    // UPLOAD_IMAGE,
    UPDATE_ITEM,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    items: [],
    item:{},
  };
  
  export const itemReducer = (
    state = initialState,
    { type, payload }: ItemType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, itemMessage: null };
      case GET_ALL_ITEM:
        return { ...state, items: payload };
      case GET_ITEM:
        return { ...state, item: payload };
      case CREATE_ITEM:
        return { ...state, itemMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, itemMessage: payload };
      case UPDATE_ITEM:
        return { ...state, itemMessage: payload };
    //   case DELETE_ITEM:
        // return { ...state, deleteItemMessage: payload };
      default:
        return state;
    }
  };
  
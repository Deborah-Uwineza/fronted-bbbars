import {
    ERRORS,
    supportType,
    GET_ALL_SUPPORT,
    CREATE_SUPPORT,
    // DELETE_SUPPORT,
    GET_SUPPORT,
    // UPLOAD_IMAGE,
    UPDATE_SUPPORT,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    supports: [],
    support:{},
  };
  
  export const supportReducer = (
    state = initialState,
    { type, payload }:supportType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, supportMessage: null };
      case GET_ALL_SUPPORT:
        return { ...state, supports: payload };
      case GET_SUPPORT:
        return { ...state, support: payload };
      case CREATE_SUPPORT:
        return { ...state, supportMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, itemMessage: payload };
      case UPDATE_SUPPORT:
        return { ...state, supportMessage: payload };
    //   case DELETE_SUPPORT:
        // return { ...state, deleteSupportMessage: payload };
      default:
        return state;
    }
  };
  
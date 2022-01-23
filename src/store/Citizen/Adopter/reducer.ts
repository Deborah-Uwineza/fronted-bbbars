import {
    ERRORS,
    AdopterType,
    GET_ALL_ADOPTER,
    CREATE_ADOPTER,
    // DELETE_ADOPTER,
    GET_ADOPTER,
    // UPLOAD_IMAGE,
    UPDATE_ADOPTER,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    adopters: [],
    enfants:[],
    enfant:{},
  };
  
  export const adopterReducer = (
    state = initialState,
    { type, payload }: AdopterType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, adopterMessage: null };
      case GET_ALL_ADOPTER:
        return { ...state, adopters: payload };
        
      case GET_ADOPTER:
        return { ...state, adopter: payload };
      case CREATE_ADOPTER:
        return { ...state, adopterMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, itemMessage: payload };
      case UPDATE_ADOPTER:
        return { ...state, adopterMessage: payload };
    //   case DELETE_ITEM:
        // return { ...state, deleteItemMessage: payload };
      default:
        return state;
    }
  };
  
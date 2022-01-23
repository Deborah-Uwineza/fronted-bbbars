import {
    ERRORS,
    PrisonType,
    GET_ALL_PRISONS,
    CREATE_PRISON,
    // DELETE_ITEM,
    GET_PRISON,
    // UPLOAD_IMAGE,
    UPDATE_PRISON,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    prisons: [],
    prison:{},
  };
  
  export const prisonReducer = (
    state = initialState,
    { type, payload }: PrisonType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, prisonMessage: null };
      case GET_ALL_PRISONS:
        return { ...state, prisons: payload };
      case GET_PRISON:
        return { ...state, prison: payload };
      case CREATE_PRISON:
        return { ...state, prisonMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, itemMessage: payload };
      case UPDATE_PRISON:
        return { ...state, prisonMessage: payload };
    //   case DELETE_ITEM:
        // return { ...state, deleteItemMessage: payload };
      default:
        return state;
    }
  };
  
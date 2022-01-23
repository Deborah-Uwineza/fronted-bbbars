import {
    ERRORS,
    EnfantType,
    GET_ALL_ENFANT,
    CREATE_ENFANT,
    // DELETE_ENFANT,
    GET_ENFANT,
    // UPLOAD_IMAGE,
    UPDATE_ENFANT,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    enfants: [],
    enfant:{},
  };
  
  export const enfantReducer = (
    state = initialState,
    { type, payload }: EnfantType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, enfantMessage: null };
      case GET_ALL_ENFANT:
        return { ...state, enfants: payload };
      case GET_ENFANT:
        return { ...state, enfant: payload };
      case CREATE_ENFANT:
        return { ...state, enfantMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, enfantMessage: payload };
      case UPDATE_ENFANT:
        return { ...state, enfantMessage: payload };
    //   case DELETE_ENFANT:
        // return { ...state, deleteenfantMessage: payload };
      default:
        return state;
    }
  };
  
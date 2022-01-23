import {
    ERRORS,
    MaterialType,
    GET_ALL_MATERIAL,
    CREATE_MATERIAL,
    // DELETE_MATERIAL,
    GET_MATERIAL,
    // UPLOAD_IMAGE,
    UPDATE_MATERIAL,
  } from "./type";
  
  const initialState = {
    configMenuErrors: null,
    materials: [],
    material:{},
  };
  
  export const materialReducer = (
    state = initialState,
    { type, payload }: MaterialType
  ) => {
    switch (type) {
      case ERRORS:
        return { ...state, configMenuErrors: payload, materialMessage: null };
      case GET_ALL_MATERIAL:
        return { ...state, materials: payload };
      case GET_MATERIAL:
        return { ...state, material: payload };
      case CREATE_MATERIAL:
        return { ...state, materialMessage: payload };
    //   case UPLOAD_IMAGE:
    //     return { ...state, materialMessage: payload };
      case UPDATE_MATERIAL:
        return { ...state, materialMessage: payload };
    //   case DELETE_MATERIAL:
        // return { ...state, deleteMaterialMessage: payload };
      default:
        return state;
    }
  };
  
import axios from "axios";
import {
  ERRORS,
  GET_ALL_MATERIAL,
  CREATE_MATERIAL,
  IStateMaterial,
//   DELETE_MATERIAL,
  GET_MATERIAL,
//   UPLOAD_IMAGE,
  UPDATE_IMATERIAL,
  UPDATE_MATERIAL,
} from "./type";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createMaterial  =
  (information: IStateMaterial): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/material";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        PropertiesNo:information.PropertiesNo,
        itemId:information.itemId,
        quality:information.quality,
        quantity:information.quantity,
        status:information.status,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_MATERIAL,
          data: data.message,
          dispatch,
        });
      }
    } catch (error) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

// export const getMaterials = (): AppThunk => async (dispatch) => {
//   dispatchHandler({ type: ERRORS, data: null, dispatch });
//   try {
//     const URL = "/material";
//     const header = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     const { data } = await axios.get(URL, header);
//     console.log(data.payload);
//     if (data) {
//       dispatchHandler({
//         type: GET_ALL_MATERIAL,
//         data: data.payload,
//         dispatch,
//       });
//     }
//   } catch (error) {
//     if (error) {
//       const data = error.response;
//       return dispatchHandler({
//         type: ERRORS,
//         data,
//         dispatch,
//       });
//     }
//   }
// };

export const getMaterials = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  console.log("hello materiak");
  try {
    const URL = "/material";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    console.log(data.payload);
    if (data) {
      dispatchHandler({
        type: GET_ALL_MATERIAL,
        data: data.payload,
        dispatch,
      });
    }
  } catch (error) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

// export const deleteMaterial =
//   (materialId: any): AppThunk =>
//   async (dispatch) => {
//     dispatchHandler({ type: ERRORS, data: null, dispatch });
//     try {
//       const URL = `/items/${itemId}`;
//       const { data } = await axios.delete(URL);
//       if (data) {
//         dispatchHandler({
//           type: DELETE_ITEM,
//           data: data.message,
//           dispatch,
//         });
//       }
//     } catch (error: any) {
//       if (error) {
//         const data = error.response;
//         return dispatchHandler({
//           type: ERRORS,
//           data,
//           dispatch,
//         });
//       }
//     }
//   };

export const getMaterial =
  (materialId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/material${materialId}`;

      const { data } = await axios.get(URL);
      console.log(data.payload);

      if (data) {
        dispatchHandler({
          type: GET_MATERIAL,
          data: data.payload,
          dispatch,
        });
      }
    } catch (error) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

// export const uploadImage =
//   (itemId: any, information: any): AppThunk =>
//   async (dispatch) => {
//     dispatchHandler({ type: ERRORS, data: null, dispatch });
//     try {
//       const URL = `/items/uploadImage/${itemId}`;

//       const file = information.name;
//       const formData = new FormData();
//       formData.append("file", information);

//       const { data } = await axios.post(URL, formData);
//       if (data) {
//         dispatchHandler({
//           type: UPLOAD_IMAGE,
//           data: data.message,
//           dispatch,
//         });
//       }
//     } catch (error: any) {
//       if (error) {
//         const data = error.response;
//         return dispatchHandler({
//           type: ERRORS,
//           data,
//           dispatch,
//         });
//       }
//     }
//   };

export const updateMaterial =
  (materialId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/material/${materialId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_MATERIAL,
          data: data.message,
          dispatch,
        });
      }
    } catch (error) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

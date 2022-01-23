import axios from "axios";
import {
  ERRORS,
  GET_ALL_SUPPORT,
  CREATE_SUPPORT,
  IStateSupport,
//   DELETE_SUPPORT,
  GET_SUPPORT,
//   UPLOAD_IMAGE,
  UPDATE_SUPPORT,
} from "./type";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createSupport=
  (information: IStateSupport): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/support";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        National_Id:information.National_Id,
    
        country:information.country,
       
        city:information.city,
       
        gender:information.gender,
        
        dob:information.dob,
        
        supportType:information.supportType,
      };

      const { data } = await axios.post(URL, info);
      console.log(data.payload);
      if (data) {
        dispatchHandler({
          type: CREATE_SUPPORT,
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

export const getSupport = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/support";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    console.log(data);
    if (data) {
      dispatchHandler({
        type: GET_ALL_SUPPORT,
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

// export const deleteItem =
//   (itemId: any): AppThunk =>
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

export const getSupports =
  (supportId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/support/${supportId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_SUPPORT,
          data: data,
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

export const updateSupport =
  (supportId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/support/${supportId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_SUPPORT,
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

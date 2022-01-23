import axios from "axios";
import {
  ERRORS,
  GET_ALL_PRISONS,
  CREATE_PRISON,
  IStatePrison,
//   DELETE_PRISONS,
  GET_PRISON,
//   UPLOAD_IMAGE,
  UPDATE_PRISON,
} from "./type";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createPrison =
  (information: IStatePrison): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/prison";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        names: information.names,
        location: information.location,
        username: information.username,
        password :information.password,
        email:information.email,
        phone:information.phone,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_PRISON,
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

export const getPrison = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/prison";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    console.log(data.payload);
    if (data) {
      dispatchHandler({
        type: GET_ALL_PRISONS,
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

export const getPrisons =
  (prisonId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/prison/${prisonId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_PRISON,
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

export const updatePrison =
  (prisonId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/prison/${prisonId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_PRISON,
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

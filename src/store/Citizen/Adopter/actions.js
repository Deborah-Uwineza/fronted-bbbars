import axios from "axios";
import {
  ERRORS,
  GET_ALL_ADOPTER,
  CREATE_ADOPTER,
  IStateAdopter,
//   DELETE_ADOPTER,
  GET_ADOPTER,
//   UPLOAD_IMAGE,
  UPDATE_ADOPTER,
} from "./type";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createAdopter =
  (information: IStateAdopter): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/adopter";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        nationId:information.nationId,
        country:information.country,
        enfantId:information.enfantId,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_ADOPTER,
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

export const getAdopter = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/adopter";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    console.log(data.payload);
    if (data) {
      dispatchHandler({
        type: GET_ALL_ADOPTER,
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

export const getAdopters =
  (adopterId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/adopter/${adopterId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_ADOPTER,
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

export const updateAdopter =
  (adopterId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/adopter/${adopterId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_ADOPTER,
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

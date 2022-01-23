import axios from "axios";
import {
  ERRORS,
  GET_ALL_ENFANT,
  CREATE_ENFANT,
  IStateEnfant,
//   DELETE_PRISONS,
  GET_ENFANT,
//   UPLOAD_IMAGE,
  UPDATE_ENFANT,
} from "./type";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createEnfant =
  (information: IStateEnfant): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/enfant";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        names:information.names,
        parentNames:information.parentNames,
       age:information.age,
       country:information.country,
       reasons:information.reasons,
       image:information.image,
       status:information.status,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_ENFANT,
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

export const getEnfants = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/enfant";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    console.log(data.payload);
    if (data) {
      dispatchHandler({
        type: GET_ALL_ENFANT,
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

export const getEnfant =
  (enfantId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/enfant/${enfantId}`;

      const { data } = await axios.get(URL);
      console.log(data.payload);

      if (data) {
        dispatchHandler({
          type: GET_ENFANT,
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

export const updateEnfant =
  (enfantId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/enfant/${enfantId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_ENFANT,
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

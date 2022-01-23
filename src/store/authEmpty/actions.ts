import axios from "axios";
import {  EMPTY, ERRORS, IEmptyParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";


export const authActionsEmpty =
  (formData: IEmptyParams, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/";

      const { data } = await axios.post(URL, formData);

      console.log(data);

      if (data) {
        dispatchHandler({ type: EMPTY, data: data, dispatch });
        
          history.push("");
        

      }
    } catch (error: any) {
      if (error) {
        const data = error.response.data;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const SignOut = () => {
  localStorage.removeItem("TOKEN");
  window.location.replace("/");
};

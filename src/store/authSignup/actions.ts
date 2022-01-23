import axios from "axios";
import {  ERRORS,  IsignupParams, SIGNUP } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";


export const authActionsSignup =
  (formData: IsignupParams, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/auth/citizen";

      const { data } = await axios.post(URL, formData);

      console.log(data);

      if (data) {
        dispatchHandler({ type: SIGNUP, data: data, dispatch });
        
          history.push("/");
        

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

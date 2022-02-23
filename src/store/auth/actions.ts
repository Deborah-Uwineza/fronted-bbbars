import axios from "axios";
import { LOGIN, ERRORS, ILoginParams } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import { decode } from "jsonwebtoken";

export const authActions =
  (formData: ILoginParams, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/auth/login/";

      const { data } = await axios.post(URL, formData);

      console.log(data);

      if (data) {
        dispatchHandler({ type: LOGIN, data: data, dispatch });
        const token: any = decode(data.payload.accessToken);
        localStorage.setItem("TOKEN", data.payload.accessToken);
        localStorage.setItem("USERNAME", token.username);

        if (token.role === "SYS_ADMIN") {
          history.push("/sysAdmin/dashboard");
        }

        if (token.role === "IT_ADMIN") {
          history.push("/itAdmin/materials");
        }

        if (token.role === "CITIZENS") {
          history.push("/citizen/dashboard");
        }

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

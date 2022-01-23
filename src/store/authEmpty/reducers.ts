
import {  EMPTY, ERRORS, IAuthTypeEmpty } from "./types";

const initialState = {
  message: null,
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthTypeEmpty
) => {
  switch (type) {
    case EMPTY:
      return { ...state, message: payload };

      case ERRORS:
        return { ...state, errors: payload };

    default:
      return state;
  }
};

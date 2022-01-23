

export const EMPTY= "EMPTY";
export const ERRORS = "ERRORS";

export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IEmptyParams {
  username: string;
  password: string;
}
interface  IEmpty {
  type: typeof EMPTY;
  payload: {
    data: IEmptyParams;
  };
}

interface IemptyErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}



interface IPasswordErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}




export type IAuthTypeEmpty =
  | IEmpty
  | IemptyErrors
  | IPasswordErrors


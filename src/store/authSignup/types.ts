export const SIGNUP= "SIGNUP";
export const ERRORS = "ERRORS";

export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IsignupParams {
  username: string;
  password: string;
}
interface Isignup {
  type: typeof SIGNUP;
  payload: {
    data: IsignupParams;
  };
}

interface IsignupErrors {
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




export type IAuthType =
  | Isignup
  | IsignupErrors
  | IPasswordErrors


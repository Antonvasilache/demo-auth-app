export type EmailSubmit = {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

export type EmailInvalid = {
  email: boolean;
  confirmEmail: boolean;
  password: boolean;
  confirmPassword: boolean;
};

export type InputType =
  | "email"
  | "confirmEmail"
  | "password"
  | "confirmPassword";

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

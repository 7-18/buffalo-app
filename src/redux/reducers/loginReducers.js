import { typesLogin } from "../types/types";

export const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case typesLogin.LOGIN:
      return {
        email: action.payload.email,
        password: action.payload.password,
      };
    case typesLogin.LOGOUT:
      return {};
    default:
      return state;
  }
};

import { typesRegister } from "../types/types";

export const registerReducers = (state = {}, action) => {
  switch (action.type) {
    case typesRegister.REGISTER:
      return {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

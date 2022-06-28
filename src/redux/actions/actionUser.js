import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { google } from "../../firebase/firebase.config";
import { typesLogin, typesRegister } from "../types/types";

const registerUserSync = (name, email, phone, password) => ({
  type: typesRegister.REGISTER,
  payload: {
    name,
    email,
    phone,
    password,
  },
});

export const registerUserAsync = (name, email, phone, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
          phoneNumber: phone,
          photoURL:
            "https://res.cloudinary.com/divjxvhtz/image/upload/v1656207618/dwayne-la-roca-johnson-presento-el-espectacular-elenco-the-titan-games_sjfjdq.png",
        });
        dispatch(registerUserSync(name, email, password));
      })
      .catch((error) => {
        console.warn("User not created", error);
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(async ({ user }) => {
        dispatch(
          registerUserSync(user.displayName, user.email, user.phoneNumber)
        );
      })
      .catch((error) => {
        console.warn("User not created", error);
      });
  };
};

const loginUserSync = (email, password) => ({
  type: typesLogin.LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginUserAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(loginUserSync(email, password));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logoutUserSync = () => ({ type: typesLogin.LOGOUT });

export const logoutUserAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(logoutUserSync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

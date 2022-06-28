import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { typesWorkout } from "../types/types";

const addWorkoutSync = (workout) => {
  return {
    type: typesWorkout.ADD_WORKOUT,
    payload: workout,
  };
};

export const addWorkoutAsync = (workout) => {
  return (dispatch) => {
    addDoc(collection(db, "workouts"), workout)
      .then((doc) => {
        dispatch(addWorkoutSync(workout));
        dispatch(workoutListAsync());
      })
      .catch((error) => {
        console.log("Workout don't add", error);
      });
  };
};

const workoutListSync = (workouts) => {
  return {
    type: typesWorkout.LIST,
    payload: workouts,
  };
};

export const workoutListAsync = () => {
  return async (dispatch) => {
    const dbWorkout = collection(db, "workouts");
    const workout = await getDocs(dbWorkout);
    const workList = [];
    workout.forEach((work) => {
      workList.push({
        ...work.data(),
      });
    });
    dispatch(workoutListSync(workList));
  };
};

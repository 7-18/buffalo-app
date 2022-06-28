import { typesWorkout } from "../types/types";

const initialState = {
  workouts: [],
};

export const workourtsReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesWorkout.LIST:
      return {
        workouts: [...action.payload],
      };
    case typesWorkout.ADD_WORKOUT:
      return {
        workouts: [...state.workouts, action.payload],
      };
    case typesWorkout.DELETE_WORKOUT:
      return {
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload
        ),
      };
    case typesWorkout.UPDATE_WORKOUT:
      return {
        workouts: state.workouts.map((workout) => {
          if (workout.id === action.payload.id) {
            return action.payload;
          }
          return workout;
        }),
      };

    default:
      return state;
  }
};

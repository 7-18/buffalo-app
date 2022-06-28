import React, { useEffect } from "react";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  BgImageWorkout,
  Days,
  DaysButton,
  DivDays,
  RutineButton,
  RutineDiv,
} from "../styles/WorkoutStyles";
import done from "../assets/images/Done.svg";
import { useSelector, useDispatch } from "react-redux";
import { workoutListAsync } from "../redux/actions/actionWorkouts";

export const Workout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);

  const back = () => {
    navigate(-1);
  };

  const { id } = useParams();

  useEffect(() => {
    dispatch(workoutListAsync());
  }, []);

  const workout = workouts.find((workout) => workout.id === id);

  return (
    <div>
      <BgImageWorkout bgImage={workout?.image}>
        <Back
          style={{ color: "var(--optional-secondary-color)" }}
          onClick={back}
        />
      </BgImageWorkout>
      <Days>
        <h2>{workout?.name}</h2>
        <DivDays>
          <DaysButton>Day 1</DaysButton>
          <DaysButton>Day 2</DaysButton>
          <DaysButton>Day 3</DaysButton>
        </DivDays>
      </Days>
      <RutineDiv>
        <RutineButton onClick={() => navigate(`/workout/${id}/set/1`)}>
          <span className="index">
            1<span className="rut">Pull-ups </span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            2<span className="rut">Reverse pull-up</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            3<span className="rut">Bicep curl</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            4<span className="rut">Lifting dumbbells in front of you</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            5<span className="rut">Curls for biceps on the bench</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            6<span className="rut">Bent over row</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            7<span className="rut">Horizontal block pull</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            8<span className="rut">One arm dumbbell row</span>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <small>Finish early</small>
      </RutineDiv>
    </div>
  );
};

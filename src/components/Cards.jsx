import React, { useEffect } from "react";
import workout from "../assets/images/Img1.png";
import { ReactComponent as Difficulty } from "../assets/images/Difficulty-3.svg";
import { ReactComponent as Difficulty2 } from "../assets/images/Difficulty-2.svg";
import lock from "../assets/images/lock.svg";
import { Card, CardText, DivCards } from "../styles/CardStyles";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { workoutListAsync } from "../redux/actions/actionWorkouts";
export const Cards = () => {
  const { workouts } = useSelector((state) => state.workouts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(workoutListAsync());
  }, []);

  return (
    <DivCards>
      {workouts.map((workout) => (
        <Card
          onClick={() => navigate(`/workout/${workout.id}`)}
          key={workout.id}
        >
          <img src={workout?.image} />
          {workout?.difficulty === 3 ? (
            <Difficulty className="difficulty" />
          ) : (
            <Difficulty2 className="difficulty" />
          )}
          <CardText>
            <h2>
              {workout?.name} <span>{workout?.time}</span>
            </h2>
            <div>
              <p>{workout?.description}</p>
              <span>
                {workout?.premium === false ? (
                  "free"
                ) : (
                  <>
                    <img src={lock} />
                    Premium
                  </>
                )}
              </span>
            </div>
          </CardText>
        </Card>
      ))}
    </DivCards>
  );
};

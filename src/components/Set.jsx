import React from "react";
import workout from "../assets/images/Img4-complete.png";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  BgImageWorkout,
  Days,
  DivDays,
  Play,
  RutineButton,
  RutineDiv,
} from "../styles/WorkoutStyles";
import done from "../assets/images/Done.svg";
import { ButtonStyled } from "../styles/StepsStyles";
import play from "../assets/images/Play.svg";

export const Set = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  console.log(id);

  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <BgImageWorkout bgImage={workout}>
        <Back
          style={{ color: "var(--optional-secondary-color)" }}
          onClick={back}
        />
        <Play>
          <img src={play} className="play" />
        </Play>
      </BgImageWorkout>
      <Days>
        <DivDays style={{ justifyContent: "space-between" }}>
          <span>3 sets</span>
          <span>12 repetitions</span>
        </DivDays>
      </Days>
      <RutineDiv>
        <RutineButton onClick={() => navigate(`/workout/${id}/set/1`)}>
          <span className="index">
            set 1
            <div>
              <span className="rep">
                12 <span>repetitions</span>
              </span>
              <span className="rep">
                15 <span>kilogram</span>
              </span>
            </div>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            set 2
            <div>
              <span className="rep">
                20 <span>repetitions</span>
              </span>
              <span className="rep">
                15 <span>kilogram</span>
              </span>
            </div>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <RutineButton>
          <span className="index">
            set 3
            <div>
              <span className="rep">
                15 <span>repetitions</span>
              </span>
              <span className="rep">
                15 <span>kilogram</span>
              </span>
            </div>
          </span>
          <img src={done} className="done" />
        </RutineButton>
        <ButtonStyled style={{ marginTop: "30vh" }}>
          Finish the exercise
        </ButtonStyled>
      </RutineDiv>
    </div>
  );
};

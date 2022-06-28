import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { CreateDiv, CreateSet, CreateSetButton } from "../styles/CreateStyles";
import { ButtonFilter, DivFilters } from "../styles/FilterStyles";
import biceps from "../assets/images/biceps.svg";
import hard from "../assets/images/hard.svg";
import bin from "../assets/images/bin.svg";
export const Create = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <CreateDiv>
      <div className="top">
        <Back
          style={{ color: "var(--optional-secondary-color)" }}
          onClick={back}
        />
        <h2>Create a workout</h2>
      </div>
      <DivFilters style={{ padding: 0 }}>
        <ButtonFilter style={{ marginRight: "4px" }}>All body</ButtonFilter>
        <ButtonFilter style={{ marginRight: "4px" }}>Triceps</ButtonFilter>
        <ButtonFilter style={{ marginRight: "4px" }}>Biceps</ButtonFilter>
        <ButtonFilter style={{ marginRight: "4px" }}>Breast</ButtonFilter>
        <ButtonFilter style={{ marginRight: "4px" }}>Back</ButtonFilter>
        <ButtonFilter style={{ marginRight: "0px" }}>Legs</ButtonFilter>
      </DivFilters>
      <CreateSet>
        <div>
          <h2>
            <span>
              <img src={biceps} />
              Bicep curl
            </span>
            <img src={hard} />
          </h2>
          <CreateSetButton>
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
            <img src={bin} />
          </CreateSetButton>
          <CreateSetButton>
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
            <img src={bin} />
          </CreateSetButton>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Working in a biceps machine
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Barbell curl for biceps
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Lifts on the block and in simulators
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Lifting dumbbells for biceps while standing
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Hammer dumbbell lift
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
      <CreateSet>
        <div style={{ borderRadius: "66px" }}>
          <h2>
            <span>
              <img src={biceps} />
              Reverse pull up
            </span>
          </h2>
        </div>
        <h3>Add set</h3>
      </CreateSet>
    </CreateDiv>
  );
};

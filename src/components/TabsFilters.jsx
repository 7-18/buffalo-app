import { TabButton, TabFiltersDiv } from "../styles/TabsFilterStyles";
import biceps from "../assets/images/biceps.svg";
import { Filters } from "./Filters";
import { CreateButton } from "../styles/CreateStyles";
import { useNavigate } from "react-router-dom";

export const TabsFilters = ({ updateFilter, tabFilters }) => {
  const navigate = useNavigate();

  const tabWorkouts = () => {
    updateFilter("workouts");
  };

  const myWorkouts = () => {
    if (tabFilters === "workouts")
      return (
        <div style={{ padding: "10px 20px" }}>
          <CreateButton onClick={() => navigate("/create-workout")}>
            Create a workout <img src={biceps} />
          </CreateButton>
        </div>
      );
    if (tabFilters === "discover") return <Filters />;
  };

  const tabDiscover = () => {
    updateFilter("discover");
  };

  return (
    <>
      <TabFiltersDiv>
        <TabButton
          className={tabFilters === "discover" ? "active" : null}
          onClick={tabDiscover}
        >
          Discover
        </TabButton>
        <TabButton
          className={tabFilters === "workouts" ? "active" : null}
          onClick={tabWorkouts}
        >
          My workouts
        </TabButton>
      </TabFiltersDiv>
      {myWorkouts()}
    </>
  );
};

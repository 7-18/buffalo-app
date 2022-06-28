import { ButtonFilter, DivFilters } from "../styles/FilterStyles";
import { Cards } from "./Cards";

export const Filters = () => {
  return (
    <>
      <DivFilters>
        <ButtonFilter>All body</ButtonFilter>
        <ButtonFilter>Triceps</ButtonFilter>
        <ButtonFilter>Biceps</ButtonFilter>
        <ButtonFilter>Breast</ButtonFilter>
        <ButtonFilter>Back</ButtonFilter>
        <ButtonFilter>Legs</ButtonFilter>
      </DivFilters>
      <Cards />
    </>
  );
};

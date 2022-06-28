import styled from "styled-components";

export const DivFilters = styled.div`
  padding: 0 5px 0 20px;
  width: 100%;
`;

export const ButtonFilter = styled.button`
  font-weight: 300;
  font-size: 10px;
  text-align: center;
  color: var(--white);
  background-color: var(--add-shade-color);
  border-radius: 37px;
  border: none;
  padding: 3px 12.5px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus,
  &.active {
    background-color: var(--optional-secondary-color);
  }
`;

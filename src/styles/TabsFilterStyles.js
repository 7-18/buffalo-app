import styled from "styled-components";

export const TabFiltersDiv = styled.div`
  border-radius: 62px;
  background-color: var(--add-shade-color);
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TabButton = styled.button`
  border: none;
  padding: 5px 40px;
  border-radius: 62px;
  background-color: var(--add-shade-color);
  color: var(--white);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;

  &:hover, &.active {
    background-color: var(--optional-secondary-color);
  }
`;

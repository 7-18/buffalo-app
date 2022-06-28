import styled from "styled-components";
import { RutineButton } from "./WorkoutStyles";

export const CreateButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--optional-secondary-color);
  color: var(--white);
  border-radius: 45px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreateDiv = styled.div`
  padding: 10px 15px;

  & > div.top {
    display: flex;
    margin-bottom: 20px;
    & > h2 {
      font-weight: 400;
      font-size: 15px;
      margin-left: 100px;
    }
  }
`;

export const CreateSet = styled.div`
  background-color: var(--add-shade-color);
  border-radius: 11px;
  margin: 20px 0;
  padding: 20px;

  & > div > h2 {
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span > img {
      margin-right: 10px;
    }
  }

  & > h3 {
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    opacity: 0.7;
    margin-top: 25px;
    display: none;
  }

  &.active > h3, &:focus > h3 {
    display: block;
  }
`;

export const CreateSetButton = styled(RutineButton)`
  padding: 5px 15px;

  & > span.index {
    font-weight: 400;
    font-size: 14px;

    & > div > span.rep {
      font-weight: 300;
      font-size: 10px;
    }
  }

  &:focus,
  &:hover,
  &.active {
    background: transparent;
  }
`;

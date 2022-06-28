import styled from "styled-components";

export const BgImageWorkout = styled.div`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 236px;
  padding: 30px 15px 10px;
  position: relative;
`;

export const Play = styled.button`
  position: absolute;
  left: 50%;
  right: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const Days = styled.div`
  margin-top: -20px;
  & > h2 {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const DivDays = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 0 15px;

  & > span {
    font-weight: 300;
    font-size: 14px;
    margin-top: -10px;
    opacity: 0.7;
  }
`;

export const DaysButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--add-shade-color);
  border-radius: 71px;
  color: var(--white);
  font-weight: 500;
  font-size: 18px;
  padding: 5px 20px;

  &:hover,
  &:focus,
  &.active {
    border-color: var(--optional-secondary-color);
  }
`;

export const RutineDiv = styled.div`
  margin: 40px 15px;
  & > small {
    font-weight: 300;
    font-size: 14px;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    margin-top: 10vh;
  }
`;

export const RutineButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--optional-secondary-color);
  color: var(--white);
  border-radius: 45px;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > span.index {
    font-weight: 500;
    font-size: 18px;
    margin-right: 10px;
    display: flex;
    align-items: center;

    & > span.rut {
      font-weight: 300;
      font-size: 14px;
      opacity: 0.7;
      margin-left: 20px;
    }

    & > div {
      margin-left: 45px;
      display: flex;
      text-align: center;
      & > span.rep {
        font-weight: 500;
        font-size: 18px;
        display: flex;
        flex-direction: column;

        &:last-child {
          margin-left: 50px;
        }

        & > span {
          font-weight: 300;
          font-size: 10px;
          opacity: 0.7;
        }
      }
    }
  }

  & > .done {
    width: 20px;
    height: 20px;
    display: none;
  }

  &:hover,
  &:focus,
  &.completed {
    background-color: var(--optional-secondary-color);
  }

  &:focus > .done,
  &.completed > .done {
    display: block;
  }
`;

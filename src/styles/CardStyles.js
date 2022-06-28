import styled from "styled-components";

export const DivCards = styled.div`
  padding: 0 20px;
`;

export const Card = styled.div`
  background-color: var(--add-shade-color);
  border-radius: 11px;
  position: relative;
  margin: 20px 0;

  & > img {
    width: 100%;
    height: 120px;
    border-radius: 11px 11px 0px 0px;
  }

  & > .difficulty {
    position: absolute;
    top: 15px;
    left: 15px;
  }
`;

export const CardText = styled.div`
  padding: 0 20px 20px;

  & > h2 {
    font-weight: 500;
    font-size: 18px;
    margin: 5px 0 10px;

    & > span {
      font-weight: 300;
      font-size: 14px;
      float: right;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > p {
      font-weight: 300;
      font-size: 9px;
      width: 60%;
      opacity: 0.7;
    }

    & > span {
      font-weight: 500;
      font-size: 10px;
      color: var(--optional-secondary-color);
      margin-top: 15px;

      & > img {
        margin-right: 5px;
      }
    }
  }
`;

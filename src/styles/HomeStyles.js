import styled from "styled-components";

export const HomeDiv = styled.div`
  padding: 20px 0;
  width: 100%;
`;

export const Menu = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    font-size: 14px;
    gap: 20px;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

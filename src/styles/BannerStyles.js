import styled from "styled-components";

export const BannersDiv = styled.div`
  margin: 20px 0 20px 20px;
  scroll-snap-type: x mandatory;
  overflow: auto;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 20px;
`;

export const BannersItem = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  background-color: var(--add-shade-color);
  border-radius: 11px;

  & > div {
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 323px;
    height: 122px;

    & > div {
      margin-top: -20px;
      & > h2 {
        font-weight: 500;
        font-size: 18px;
      }

      & p {
        font-weight: 300;
        font-size: 14px;
        padding-top: 10px;
        width: 95%;
      }
    }
    & > img {
      width: 60px;
      height: 106px;
    }
  }
`;

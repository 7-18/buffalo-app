import styled from "styled-components";

export const HeroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const HeroTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.3px;
  padding-top: 50px;
`;

export const HeroText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.3px;
  padding: 10px 75px 20px;
  opacity: 0.7;
`;

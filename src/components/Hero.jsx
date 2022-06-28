import { HeroDiv, HeroImg, HeroText, HeroTitle } from "../styles/HeroStyles";

export const Hero = ({ img, title, description }) => {
  return (
    <HeroDiv>
      <HeroImg src={img} alt="hero" />
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{description}</HeroText>
    </HeroDiv>
  );
};

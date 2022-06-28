import { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Logo, LogoDiv } from "../styles/LogoHomeStyles";
import { Steppers } from "./Steppers";

export const LogoHome = () => {
  const [loadingLogo, setLoadingLogo] = useState(true);

  const TimerSteps = () => {
    setTimeout(() => {
      setLoadingLogo(false);
    }, 3000);
  };

  useEffect(() => {
    TimerSteps();
  }, []);

  return (
    <>
      {loadingLogo ? (
        <LogoDiv>
          <img src={logo} alt="logo" />
          <Logo>Buffalo</Logo>
        </LogoDiv>
      ) : (
        <Steppers />
      )}
    </>
  );
};

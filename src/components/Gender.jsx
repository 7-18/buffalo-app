import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { LoginDiv } from "../styles/LoginStyles";
import { DivGender, GenderButton } from "../styles/CharacteristicStyles";
import { useNavigate } from "react-router-dom";
import masc from "../assets/images/masc.png";
import femenine from "../assets/images/femenine.png";
import { ButtonStyled } from "../styles/StepsStyles";

export const Gender = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");

  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify({ ...user, gender }));
    if (user.gender !== "") navigate("/suscription");
  };

  return (
    <div style={{ padding: "10px 15px" }}>
      <Back
        style={{ color: "var(--optional-secondary-color)" }}
        onClick={back}
      />
      <LoginDiv style={{ padding: "0" }}>
        <img src={logo} alt="logo" />
        <h2 style={{ fontSize: "18px" }}>Choose gender</h2>
        <div style={{ padding: "8vh 0" }}>
          <DivGender style={{ marginBottom: "20px" }}>
            <GenderButton onClick={() => setGender("masculine")} id="male">
              <img src={masc} alt="masc" />
            </GenderButton>
            <span>Male</span>
          </DivGender>
          <DivGender>
            <GenderButton onClick={() => setGender("femenine")} id="fem">
              <img src={femenine} alt="femenine" />
            </GenderButton>
            <span>Female</span>
          </DivGender>
        </div>
        <ButtonStyled onClick={handleSubmit}>Next</ButtonStyled>
      </LoginDiv>
    </div>
  );
};

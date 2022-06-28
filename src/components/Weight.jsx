import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { LoginDiv } from "../styles/LoginStyles";
import {
  FormInputs,
  InputActual,
  InputFirst,
  InputLast,
  InputPost,
  SpanCm,
} from "../styles/CharacteristicStyles";
import { ButtonStyled } from "../styles/StepsStyles";
import { useNavigate } from "react-router-dom";
export const Weight = () => {
  const [weight, setWeight] = useState(78);

  const handleWeight = (e) => {
    setWeight(Math.abs(Number(e.target.value)));
  };

  const navigate = useNavigate();

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
    localStorage.setItem("user", JSON.stringify({ ...user, weight }));
    navigate("/register/age");
  };

  return (
    <div style={{ padding: "10px 15px" }}>
      <Back
        style={{ color: "var(--optional-secondary-color)" }}
        onClick={back}
      />
      <LoginDiv style={{ padding: "0" }}>
        <img src={logo} alt="logo" />
        <h2 style={{ fontSize: "18px" }}>Enter your weight</h2>
        <FormInputs>
          <InputLast type="number" value={weight - 3} readOnly />
          <InputPost type="number" value={weight - 2} readOnly />
          <InputFirst type="number" value={weight - 1} readOnly />
          <InputActual
            type="number"
            defaultValue={weight}
            onChange={handleWeight}
          />
          <SpanCm>Kg</SpanCm>
          <InputFirst type="number" value={weight + 1} readOnly />
          <InputPost type="number" value={weight + 2} readOnly />
          <InputLast type="number" value={weight + 3} readOnly />
        </FormInputs>
        <ButtonStyled onClick={handleSubmit}>Next</ButtonStyled>
      </LoginDiv>
    </div>
  );
};

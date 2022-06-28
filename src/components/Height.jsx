import { useEffect, useState } from "react";
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
export const Height = () => {
  const [height, setHeight] = useState(180);

  const handleHeight = (e) => {
    setHeight(Math.abs(Number(e.target.value)));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify({ ...user, height }));
    navigate("/register/weight");
  };

  return (
    <div style={{ padding: "10px 15px" }}>
      <Back
        style={{ color: "var(--optional-secondary-color)" }}
        onClick={back}
      />
      <LoginDiv style={{ padding: "0" }}>
        <img src={logo} alt="logo" />
        <h2 style={{ fontSize: "18px" }}>Enter your height</h2>
        <FormInputs>
          <InputLast type="number" value={height - 3} readOnly />
          <InputPost type="number" value={height - 2} readOnly />
          <InputFirst type="number" value={height - 1} readOnly />
          <InputActual
            type="number"
            defaultValue={height}
            onChange={handleHeight}
          />
          <SpanCm>Cm</SpanCm>
          <InputFirst type="number" value={height + 1} readOnly />
          <InputPost type="number" value={height + 2} readOnly />
          <InputLast type="number" value={height + 3} readOnly />
        </FormInputs>
        <ButtonStyled onClick={handleSubmit}>Next</ButtonStyled>
      </LoginDiv>
    </div>
  );
};

import React, { useEffect } from "react";
import logo from "../assets/images/Logo.png";
import { ReactComponent as Back } from "../assets/images/Back.svg";
import { LoginDiv } from "../styles/LoginStyles";
import { ButtonStyled } from "../styles/StepsStyles";
import { useNavigate } from "react-router-dom";
import { ButtonSuscription } from "../styles/CharacteristicStyles";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "../redux/actions/actionUser";

export const Suscription = () => {
  const dispatch = useDispatch();
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
    dispatch(
      registerUserAsync(user.name, user.email, user.phone, user.password)
    );
  };

  return (
    <div style={{ padding: "10px 15px" }}>
      <Back
        style={{ color: "var(--optional-secondary-color)" }}
        onClick={back}
      />
      <LoginDiv style={{ padding: "0" }}>
        <img src={logo} alt="logo" />
        <h2 style={{ fontSize: "18px" }}>Choose a suscription</h2>
        <p>We believe that our application will help you achieve your goals</p>
        <ButtonSuscription>
          Monthly{" "}
          <span>
            8.99<small>Usd</small>
          </span>
        </ButtonSuscription>
        <ButtonSuscription>
          Early{" "}
          <span>
            99.45<small>Usd</small>
          </span>
        </ButtonSuscription>
        <ButtonStyled style={{ margin: "30vh 0 15px" }} onClick={handleSubmit}>
          Next
        </ButtonStyled>
        <small style={{ marginBottom: "5vh" }} onClick={handleSubmit}>
          Skip for now
        </small>
      </LoginDiv>
    </div>
  );
};

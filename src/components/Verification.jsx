import { Link } from "@mui/material";
import logo from "../assets/images/Logo.png";
import { InputNumber, LoginDiv, NumberContainer } from "../styles/LoginStyles";
import { ButtonStyled } from "../styles/StepsStyles";

export const Verification = () => {
  return (
    <LoginDiv>
      <img src={logo} alt="logo" />
      <h2>Phone Verification</h2>
      <h3 style={{ opacity: "0.7" }}>Enter the four-digit code from SMS</h3>
      <h3 style={{ opacity: "0.7" }}>
        SMS not received. <Link to="/register">Send again?</Link>
      </h3>
      <NumberContainer style={{ width: "100%" }}>
        <InputNumber maxLength="1" type="text" />
        <InputNumber maxLength="1" type="text" />
        <InputNumber maxLength="1" type="text" />
        <InputNumber maxLength="1" type="text" />
      </NumberContainer>
      <ButtonStyled type="submit" style={{ marginBottom: "15px" }}>
        Next
      </ButtonStyled>
    </LoginDiv>
  );
};

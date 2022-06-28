import styled from "styled-components";

export const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 60px 15px 30px;

  & > img {
    width: 169px;
    height: 181px;
  }

  & > h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    padding: 10px;
  }

  & > p {
    font-weight: 300;
    font-size: 10px;
    opacity: 0.7;
    margin-bottom: 30px;
  }

  & > small {
    font-style: normal;
    font-weight: 200;
    font-size: 10px;
    opacity: 0.7;
  }

  & > h3 {
    font-weight: 400;
    font-size: 14px;

    & > a {
      color: var(--optional-secondary-color);
    }
  }

  & > form {
    width: 100%;
    & > .input-styled {
      background-color: var(--add-shade-color);
      color: var(--white);
      border-radius: 35px;
      width: 100%;
      padding: 15px;
      margin: 5px 0;
      font-weight: 200;
      font-size: 14px;
      border: 1px solid var(--add-shade-color);
    
      &:focus {
        outline: none;
      }
    }
    & > div {
      font-size: 10px;
      color: #ff0000;
      margin-left: 10px;
    }
    & > label {
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    opacity: 0.7;
    margin: 10px 20px;
    display: flex;
    align-items: center;

    & > input[type="checkbox"] {
      width: 15px;
      height: 15px;
      background-color: var(--add-shade-color);
      border: 1px solid var(--add-shade-color);
      margin-left: 15px;
      border-radius: 50%;
      vertical-align: middle;
      outline: none;
      appearance: none;
      cursor: pointer;

      &:checked {
        background-color: var(--optional-secondary-color);
        border: 1px solid var(--optional-secondary-color);
    }
  }
}
`;

export const SignInWith = styled.div`
  text-align: center;
  padding: 15vh 0;

  & > h2 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const SignInWithButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    background-color: transparent;
    outline: none;
    border: none;

    &:hover,
    &:focus,
    &:active {
      transform: scale(1.1);
    }
  }

  & > img {
    width: 25px;
    height: 25px;
  }

  & > .vertical {
    border: 1px solid #2e3562;
    transform: rotate(90deg);
    width: 29px;
    height: 0px;
  }
`;

export const NumberContainer = styled.div`
  text-align: center;
  color: orange;
  font-size: 2em;
  font-weight: bold;
  margin-top: 1.5em;
  display: block;
`;

export const InputNumber = styled.input`
  border: 0;
  outline: 0;
  width: 60px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
  color: var(--white);
  font-size: 1.5em;
  border-radius: 10px;
  border: 1px solid var(--add-shade-color);
  background: transparent;
  margin-bottom: 20vh;
`;

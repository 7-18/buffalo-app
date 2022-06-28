import styled from "styled-components";

export const FormInputs = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 10vh;
`;

export const InputActual = styled.input`
  width: 85px;
  border: 2px solid transparent;
  border-top-color: var(--optional-secondary-color);
  border-bottom-color: var(--optional-secondary-color);
  background: transparent;
  outline: none;
  color: var(--white);
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  user-select: none;
  outline: none;
  appearance: none;
  caret-color: transparent !important;
`;

export const InputLast = styled(InputActual)`
  opacity: 0.3;
  border-top-color: transparent;
  border-bottom-color: transparent;
  font-size: 20px;
`;

export const InputPost = styled(InputLast)`
  opacity: 0.5;
  font-size: 30px;
`;

export const InputFirst = styled(InputLast)`
  opacity: 0.9;
  font-size: 40px;
`;

export const SpanCm = styled.span`
  position: absolute;
  width: 19px;
  height: 14px;
  font-weight: 200;
  font-size: 12px;
  line-height: 14px;
  color: var(--white);
  right: 80px;
  opacity: 0.7;
`;

export const GenderButton = styled.button`
  width: 130px;
  height: 130px;
  border-radius: 29px;
  outline: none;
  border: 1px solid var(--add-shade-color);
  background-color: transparent;

  & > img {
    width: 91px;
    height: 91px;
  }

  &:focus,
  &:hover {
    background-color: var(--add-shade-color);
  }
`;

export const DivGender = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

export const ButtonSuscription = styled.button`
  background-color: transparent;
  color: var(--white);
  border-radius: 35px;
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid var(--add-shade-color);
  text-align: left;

  &:focus {
    outline: none;
    background-color: var(--optional-secondary-color);
  }

  & > span {
    float: right;
    margin-right: 5px;
    font-weight: 500;
    font-size: 18px;

    & > small {
      font-size: 12px;
      opacity: 0.7;
      margin-left: 5px;
      margin-bottom: 20vh;
    }
  }
`;

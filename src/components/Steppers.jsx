import React, { useState } from "react";
import { Steps } from "antd";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import {
  ButtonStyled,
  StepsAction,
  StepsContent,
  StepsStyled,
} from "../styles/StepsStyles";
import { Hero } from "./Hero";
import { useNavigate } from "react-router-dom";
const { Step } = Steps;

const title = {
  first: "Workout",
  second: "Discipline",
  third: "Character",
};

const description = {
  first: "Start training with usand build muscle or lose weight",
  second: "Develop discipline in yourself train every day",
  third: "Cultivate in you an iron character for training",
};

const steps = [
  {
    title: "First",
    content: <Hero img={hero1} title={title.first} description={description.first} />,
  },
  {
    title: "Second",
    content: <Hero img={hero2} title={title.second} description={description.second} />,
  },
  {
    title: "Third",
    content: <Hero img={hero3} title={title.third} description={description.third} />,
  },
];

export const Steppers = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const onChange = (value) => {
    setCurrent(value);
  };

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  }

  return (
    <>
      <StepsContent>{steps[current].content}</StepsContent>
      <StepsStyled onChange={onChange} size="small" current={current}>
        {steps.map((item) => (
          <Step key={item.title} />
        ))}
      </StepsStyled>
      <StepsAction className="steps-action">
        {current < steps.length - 1 && (
          <ButtonStyled onClick={() => next()} size="large">
            Next
          </ButtonStyled>
        )}
        {current === steps.length - 1 && (
          <ButtonStyled size="large" onClick={goToLogin}>Registration</ButtonStyled>
        )}
      </StepsAction>
    </>
  );
};

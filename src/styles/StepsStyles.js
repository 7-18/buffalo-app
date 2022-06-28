import styled from "styled-components";
import { Button, Steps } from "antd";

export const StepsContent = styled.div`
  min-height: 200px;
  text-align: center;
`;

export const StepsAction = styled.div`
  margin: 0 15px;
`;

export const ButtonStyled = styled(Button)`
  text-align: center;
  background-color: var(--optional-secondary-color);
  color: var(--white);
  border-radius: 35px;
  width: 100%;
  padding: 10px;
  margin: 30px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  box-shadow: 0 0 0 2px var(--optional-secondary-color);
  border: 1px solid transparent;

  &:focus {
    background-color: var(--optional-secondary-color);
    box-shadow: none;
    outline: none;
  }
  &:active {
    transform: scale(1.01);
    border-color: var(--optional-secondary-color);
    box-shadow: 0 0 0 2px var(--optional-secondary-color);
  }
  &:hover {
    border-color: var(--optional-secondary-color);
    box-shadow: 0 0 0 2px var(--optional-secondary-color);
  }
`;

export const StepsStyled = styled(Steps)`
  &.ant-steps {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  }
  & > div.ant-steps-item,
  div.ant-steps-item {
    display: inline-flex;
    flex: 0;
  }
  div.ant-steps-item-icon > span {
    display: none;
  }
  div.ant-steps-item-icon,
  div.ant-steps-item-process
    > div.ant-steps-item-container
    > div.ant-steps-item-icon {
    background-color: var(--optional-secondary-color);
    border-color: var(--optional-secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
  }
  div.ant-steps-item-process
    > div.ant-steps-item-container
    > div.ant-steps-item-icon {
    width: 27px;
    height: 10px;
    opacity: 1;
  }
  div.ant-steps-item-icon {
    width: 9px;
    height: 10px;
  }
  & > div.ant-steps-item div.ant-steps-item-content {
    display: inline-flex;
    min-height: 15px;
  }
  &
    > div.ant-steps-item
    > div.ant-steps-item-container
    > div.ant-steps-item-tail {
    display: none;
    height: 0;
  }
`;

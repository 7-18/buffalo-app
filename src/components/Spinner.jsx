import { LoadingOutlined } from "@ant-design/icons";
import { SpinnerStyled } from "../styles/SpinnerStyled";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export const Spinner = () => <SpinnerStyled indicator={antIcon} />;

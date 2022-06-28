import logo from "../assets/images/Logo.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import { LoginDiv, SignInWith, SignInWithButton } from "../styles/LoginStyles";
import { ButtonStyled } from "../styles/StepsStyles";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginGoogle, loginUserAsync } from "../redux/actions/actionUser";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password too short!")
    .max(10, "Password too Long!")
    .required("Password is required"),
});

export const Login = () => {
  const dispatch = useDispatch();
  return (
    <LoginDiv>
      <img src={logo} alt="logo" />
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(loginUserAsync(values.email, values.password));
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            <Field
              className="input-styled"
              name="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              className="input-styled"
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <ButtonStyled
              type="submit"
              style={{ marginBottom: "15px" }}
              onClick={handleSubmit}
            >
              Login
            </ButtonStyled>
          </Form>
        )}
      </Formik>
      <small>Forgot Password?</small>
      <SignInWith>
        <h2>Sign In with</h2>
        <SignInWithButton>
          <button onClick={() => dispatch(loginGoogle())}>
            <img src={google} alt="google" />
          </button>
          <div className="vertical"></div>
          <button>
            <img src={facebook} alt="facebook" />
          </button>
        </SignInWithButton>
      </SignInWith>
      <h3>
        Don't have an account? <Link to="/register">Sign In</Link>
      </h3>
    </LoginDiv>
  );
};

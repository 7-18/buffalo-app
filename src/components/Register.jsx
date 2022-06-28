import logo from "../assets/images/Logo.png";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import { LoginDiv, SignInWith, SignInWithButton } from "../styles/LoginStyles";
import { ButtonStyled } from "../styles/StepsStyles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginGoogle } from "../redux/actions/actionUser";
import { useNavigate } from "react-router-dom";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name too short!")
    .max(15, "Name too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(10, "Phone number is invalid, please insert at least 10 characters")
    .max(10, "Phone number too long!")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password has to be at least 6 characters")
    .max(10, "Password too long!")
    .required("Password is required"),
});

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LoginDiv>
      <img src={logo} alt="logo" />
      <h2>Sign In</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
          imagen: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          localStorage.setItem("user", JSON.stringify(values));
          navigate("/register/height");
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            <Field
              className="input-styled"
              type="text"
              name="name"
              placeholder="Full name"
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              className="input-styled"
              type="email"
              name="email"
              placeholder="Email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              className="input-styled"
              type="tel"
              name="phone"
              placeholder="Phone number"
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <Field
              className="input-styled"
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <label>
              I have read the security policy
              <input type="checkbox" />
            </label>
            <ButtonStyled type="submit" onClick={handleSubmit}>
              Registration
            </ButtonStyled>
          </Form>
        )}
      </Formik>
      <SignInWith style={{ padding: "0 0 10vh" }}>
        <h2>OR Sign In with</h2>
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
    </LoginDiv>
  );
};

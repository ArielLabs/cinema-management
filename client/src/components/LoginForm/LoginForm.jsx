import useInput from "../../hooks/use-input";
import { NavLink } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const {
    value: emailEnteredValue,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    validValue: validEmail,
    error: emailError
  } = useInput("", (emailValue) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/i;
    return regex.test(String(emailValue).toLowerCase());
  });

  const {
    value: passwordEnteredValue,
    valueInputChangedHandler: passwordInputChangedHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    validValue: validPassword,
    error: passwordError
  } = useInput("", (passwordValue) => {
    if(passwordValue.trim().length < 6 || passwordValue.trim().length > 10) return false;
    if(!/[a-z]/.test(passwordValue)) return false;
    if(!/[A-Z]/.test(passwordValue)) return false;
    if(!/[0-9]/.test(passwordValue)) return false;
    return true;
  });

  const submitSigninHandler = (event) => {
    event.preventDefault();

    const loginUser = {
      email: emailEnteredValue,
      password: passwordEnteredValue
    };
    console.log(loginUser);
  }

  const validForm = validEmail && validPassword;
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.loginForm}>
      <form className={styles.loginFormContainer} onSubmit={submitSigninHandler}>
        <div className={styles.loginFormHeader}>
          <LockOutlinedIcon
            sx={{
              color: "purple",
              fontSize: "1.75rem",
            }}
          />
          <span className={styles.loginFormTitle}>Signin</span>
        </div>
        <div className={styles.loginFormDetails}>
          <TextField
            required
            autoComplete="off"
            label="Email"
            type="email"
            variant="outlined"
            sx={{ margin: "1.5rem 0" }}
            onChange={emailInputChangedHandler}
            onBlur={emailInputBlurHandler}
            error={emailError}
          />
          <TextField
            required
            autoComplete="off"
            label="Password"
            type="password"
            variant="outlined"
            onChange={passwordInputChangedHandler}
            onBlur={passwordInputBlurHandler}
            error={passwordError}
          />
        </div>
        <div className={styles.loginFormActions}>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: "500", marginBottom: "1.25rem" }}
            disabled={!validForm}
          >
            Sign in
          </Button>
          <span>
            Don&apos;t have an account?{" "}
            <NavLink to={"/register"} className={styles.signupLink}>
              Sign Up
            </NavLink>
          </span>
        </div>
      </form>
      <div>
        <span className={styles.loginFormCopyrights}>
          Copyright © Cinema {currentYear}
        </span>
      </div>
    </div>
  );
};

export default LoginForm;

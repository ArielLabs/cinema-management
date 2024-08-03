import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { displayAlert } from "../../utils/alerts";
import { axiosInstance } from "../../utils/http";
import useInput from "../../hooks/use-input";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const {
    value: emailEnteredValue,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    validValue: validEmail,
    error: emailError,
  } = useInput("", (emailValue) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/i;
    return regex.test(String(emailValue).toLowerCase());
  });

  const {
    value: passwordEnteredValue,
    valueInputChangedHandler: passwordInputChangedHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    validValue: validPassword,
    error: passwordError,
  } = useInput("", (passwordValue) => {
    if (passwordValue.trim().length < 6 || passwordValue.trim().length > 10)
      return false;
    if (!/[a-z]/.test(passwordValue)) return false;
    if (!/[A-Z]/.test(passwordValue)) return false;
    if (!/[0-9]/.test(passwordValue)) return false;
    return true;
  });

  const userLogin = (userDetails) => {
    return axiosInstance.post("auth/login", userDetails);
  };

  const { mutate: userSignin } = useMutation({
    mutationKey: 'user-login',
    mutationFn: userLogin,
    onSuccess: (res) => {
      console.log(res);
      navigate('/cinema/movies');
    },
    onError: (err) => {
      const contentError = err.response.data.message;
      displayAlert("error", contentError);
    }
  });

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submitSigninHandler = (event) => {
    event.preventDefault();

    const loginUserDetails = {
      email: emailEnteredValue,
      password: passwordEnteredValue,
    };
    userSignin(loginUserDetails);
  };

  const validForm = validEmail && validPassword;
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.loginForm}>
      <form
        className={styles.loginFormContainer}
        onSubmit={submitSigninHandler}
      >
        <div className={styles.loginFormHeader}>
          <LockOutlinedIcon
            sx={{
              color: "purple",
              fontSize: "1.75rem",
            }}
          />
          <span className={styles.loginFormTitle}>Sign in</span>
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
          <FormControl variant="outlined" required={true} error={passwordError}>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="Password"
              autoComplete="off"
              onChange={passwordInputChangedHandler}
              onBlur={passwordInputBlurHandler}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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

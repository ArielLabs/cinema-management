import { useState } from "react";
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
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    value: firstname,
    valueInputChangedHandler: firstnameInputChangedHandler,
    valueInputBlurHandler: firstnameInputBlurHandler,
    validValue: validFirstname,
    error: firstnameError,
  } = useInput("", (val) => val.trim().length > 0);

  const {
    value: lastname,
    valueInputChangedHandler: lastnameInputChangedHandler,
    valueInputBlurHandler: lastnameInputBlurHandler,
    validValue: validLastname,
    error: lastnameError,
  } = useInput("", (val) => val.trim().length > 0);

  const {
    value: email,
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
    value: password,
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

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submitRegisterHandler = (event) => {
    event.preventDefault();

    const registerDetails = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(registerDetails);
  };

  const validForm =
    validFirstname && validLastname && validEmail && validPassword;
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.registerForm}>
      <form
        className={styles.registerFormContainer}
        onSubmit={submitRegisterHandler}
      >
        <div className={styles.registerFormHeader}>
          <LockOutlinedIcon
            sx={{
              color: "purple",
              fontSize: "1.75rem",
            }}
          />
          <span className={styles.registerFormTitle}>Sign up</span>
        </div>
        <div className={styles.registerFormDetails}>
          <div className={styles.registerFormNames}>
            <TextField
              required
              autoComplete="off"
              label="First Name"
              type="text"
              variant="outlined"
              sx={{ margin: "0 0.5rem 0 0" }}
              onChange={firstnameInputChangedHandler}
              onBlur={firstnameInputBlurHandler}
              error={firstnameError}
            />
            <TextField
              required
              autoComplete="off"
              label="Last Name"
              type="text"
              variant="outlined"
              sx={{ margin: "0 0 0 0.5rem" }}
              onChange={lastnameInputChangedHandler}
              onBlur={lastnameInputBlurHandler}
              error={lastnameError}
            />
          </div>
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
          <span className={styles.guidePassword}>
            Password: 6-10 characters, including at least one lowercase, one
            uppercase and one number.
          </span>
        </div>
        <div className={styles.registerFormActions}>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: "500", marginBottom: "1.25rem" }}
            disabled={!validForm}
          >
            Sign up
          </Button>
          <span className={styles.registerError}></span>
        </div>
      </form>
      <div>
        <span className={styles.registerFormCopyrights}>
          Copyright © Cinema {currentYear}
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;

import useInput from "../../hooks/use-input";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
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
  } = useInput("", (val) => val.trim().length > 0);

  const {
    value: password,
    valueInputChangedHandler: passwordInputChangedHandler,
    valueInputBlurHandler: passwordInputBlurHandler,
    validValue: validPassword,
    error: passwordError,
  } = useInput("", (val) => val.trim().length > 0);

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

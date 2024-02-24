import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.registerForm}>
      <div className={styles.registerFormContainer}>
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
              variant="outlined"
              sx={{ margin: "0 0.5rem 0 0" }}
            />
            <TextField
              required
              autoComplete="off"
              label="Last Name"
              variant="outlined"
              sx={{ margin: "0 0 0 0.5rem" }}
            />
          </div>
          <TextField
            required
            autoComplete="off"
            label="Email"
            variant="outlined"
            sx={{ margin: "1.5rem 0" }}
          />
          <TextField
            required
            autoComplete="off"
            label="Password"
            variant="outlined"
          />
        </div>
        <div className={styles.registerFormActions}>
          <Button
            type="submit"
            variant="contained"
            sx={{ fontWeight: "500", marginBottom: "1.25rem" }}
          >
            Sign up
          </Button>
          <span className={styles.registerError}></span>
        </div>
      </div>
      <div>
        <span className={styles.registerFormCopyrights}>
          Copyright © Cinema {currentYear}
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;

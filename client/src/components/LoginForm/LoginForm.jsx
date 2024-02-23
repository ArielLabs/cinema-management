import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.loginFormContainer}>
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
        <div className={styles.loginFormActions}>
          <Button
            variant="contained"
            sx={{ fontWeight: "500", marginBottom: "1.25rem" }}
          >
            Sign in
          </Button>
          <span>
            Don&apos;t have an account? <a>Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

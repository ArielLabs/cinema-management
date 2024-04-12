import { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { displayAlert } from "../../utils/alerts";
import axios from "axios";
import env from "../../environment";
import useInput from "../../hooks/use-input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./NewUserForm.module.css";
import PermissionsList from "../PermissionsList/PermissionsList";

const NewUserForm = () => {
  const navigate = useNavigate();
  const [moviesPermissions, setMoviesPermissions] = useState([]);
  const [subscriptionsPermissions, setSubscriptionsPermissions] = useState([]);

  const {
    value: firstname,
    valueInputChangedHandler: firstnameInputChangedHandler,
    valueInputBlurHandler: firstnameInputBlurHandler,
    validValue: validFirstname,
    error: errorFirstname,
  } = useInput("", (val) => val.trim().length > 0);

  const {
    value: lastname,
    valueInputChangedHandler: lastnameInputChangedHandler,
    valueInputBlurHandler: lastnameInputBlurHandler,
    validValue: validLastname,
    error: errorLastname,
  } = useInput("", (val) => val.trim().length > 0);

  const {
    value: email,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    validValue: validEmail,
    error: errorEmail,
  } = useInput("", (emailValue) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/i;
    return regex.test(String(emailValue).toLowerCase());
  });

  const {
    value: sessionTimeout,
    valueInputChangedHandler: sessionTimeoutChangedHandler,
    valueInputBlurHandler: sessionTimeoutInputBlurHandler,
    validValue: validSessionTimeout,
    error: errorSessionTimeout,
  } = useInput("", (sessionValue) => {
    if (sessionValue.trim().length === 0) return false;
    if (!/^\d+$/.test(sessionValue)) return false;
    return true;
  });

  const onUpdatePermissionsHandler = (updatedPermission, groupname) => {
    const receivedPermissions = updatedPermission
      .filter((p) => p.checked)
      .map((p) => p.permission);
    if (groupname === "Movies") {
      setMoviesPermissions(receivedPermissions);
    } else {
      setSubscriptionsPermissions(receivedPermissions);
    }
  };

  const sendNewUser = (newUserDetails) => {
    return axios.post(`${env.apiURL}/users`, newUserDetails);
  };

  const { mutate: createNewUser } = useMutation({
    mutationFn: sendNewUser,
    onSuccess: (res) => {
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        navigate("/cinema/users");
      });
    },
    onError: (err) => {
      const { message } = err.response.data;
      displayAlert("error", message);
    },
  });

  const submitNewUserFormHandler = (event) => {
    event.preventDefault();

    const newUser = {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      SessionTimeOut: sessionTimeout,
      Permissions: {
        movies: moviesPermissions,
        subscriptions: subscriptionsPermissions,
      },
    };
    createNewUser(newUser);
  };

  const validForm =
    validFirstname && validLastname && validSessionTimeout && validEmail;
  return (
    <form
      className={styles.newUserFormContainer}
      onSubmit={submitNewUserFormHandler}
    >
      <div className={styles.headerNewUserForm}>
        <span className={styles.titleForm}>New User</span>
      </div>
      <div className={styles.newUserFormFields}>
        <div className={styles.coupleFields}>
          <div style={{ width: "38%" }}>
            <TextField
              label="First Name"
              type="text"
              variant="standard"
              autoComplete="off"
              onChange={firstnameInputChangedHandler}
              onBlur={firstnameInputBlurHandler}
              error={errorFirstname}
              sx={{
                "& label": {
                  color: "#b4b2b2",
                },
                "& label.Mui-focused": {
                  color: "#b4b2b2",
                },
                "& .MuiInputBase-input": {
                  color: "#dbd8d8",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#b4b2b2",
                },
              }}
            />
          </div>
          <div style={{ width: "38%" }}>
            <TextField
              label="Last Name"
              type="text"
              variant="standard"
              autoComplete="off"
              onChange={lastnameInputChangedHandler}
              onBlur={lastnameInputBlurHandler}
              error={errorLastname}
              sx={{
                "& label": {
                  color: "#b4b2b2",
                },
                "& label.Mui-focused": {
                  color: "#b4b2b2",
                },
                "& .MuiInputBase-input": {
                  color: "#dbd8d8",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#b4b2b2",
                },
              }}
            />
          </div>
        </div>

        <div className={styles.coupleFields}>
          <div style={{ width: "38%" }}>
            <TextField
              label="Email"
              type="text"
              variant="standard"
              autoComplete="off"
              onChange={emailInputChangedHandler}
              onBlur={emailInputBlurHandler}
              error={errorEmail}
              sx={{
                "& label": {
                  color: "#b4b2b2",
                },
                "& label.Mui-focused": {
                  color: "#b4b2b2",
                },
                "& .MuiInputBase-input": {
                  color: "#dbd8d8",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#b4b2b2",
                },
              }}
            />
          </div>
          <div style={{ width: "38%" }}>
            <TextField
              label="Session Timeout"
              type="text"
              variant="standard"
              autoComplete="off"
              onChange={sessionTimeoutChangedHandler}
              onBlur={sessionTimeoutInputBlurHandler}
              error={errorSessionTimeout}
              sx={{
                "& label": {
                  color: "#b4b2b2",
                },
                "& label.Mui-focused": {
                  color: "#b4b2b2",
                },
                "& .MuiInputBase-input": {
                  color: "#dbd8d8",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#b4b2b2",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottomColor: "#b4b2b2",
                },
              }}
            />
          </div>
        </div>
        <div className={styles.coupleFields}>
          <PermissionsList
            groupname="Movies"
            onTransferPermissions={onUpdatePermissionsHandler}
          />
          <PermissionsList
            groupname="Subscriptions"
            onTransferPermissions={onUpdatePermissionsHandler}
          />
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          type="submit"
          variant="outlined"
          disabled={!validForm}
          sx={{
            width: "6rem",
            "&.Mui-disabled": {
              border: "1px solid gray",
              color: "gray",
            },
          }}
        >
          Save
        </Button>
        <Button type="submit" variant="outlined" sx={{ width: "6rem" }}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default NewUserForm;

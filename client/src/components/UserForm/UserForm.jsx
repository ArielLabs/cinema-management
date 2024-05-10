import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { displayAlert } from "../../utils/alerts";
import { axiosInstance } from "../../utils/http";
import useInput from "../../hooks/use-input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PermissionsList from "../PermissionsList/PermissionsList";
import styles from "./UserForm.module.css";

const UserForm = (prop) => {
  const { mode, details } = prop;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [moviesPermissions, setMoviesPermissions] = useState(
    details.moviesPermissions.filter((p) => p.checked).map((p) => p.permission)
  );
  const [subscriptionsPermissions, setSubscriptionsPermissions] = useState(
    details.subscriptionsPermissions
      .filter((p) => p.checked)
      .map((p) => p.permission)
  );

  const {
    value: firstname,
    valueInputChangedHandler: firstnameInputChangedHandler,
    valueInputBlurHandler: firstnameInputBlurHandler,
    validValue: validFirstname,
    error: errorFirstname,
  } = useInput(details.FirstName, (val) => val.trim().length > 0);

  const {
    value: lastname,
    valueInputChangedHandler: lastnameInputChangedHandler,
    valueInputBlurHandler: lastnameInputBlurHandler,
    validValue: validLastname,
    error: errorLastname,
  } = useInput(details.LastName, (val) => val.trim().length > 0);

  const {
    value: email,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    validValue: validEmail,
    error: errorEmail,
  } = useInput(details.Email, (emailValue) => {
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
  } = useInput(details.SessionTimeOut, (sessionValue) => {
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

  const cancelHandler = () => {
    navigate("/cinema/users");
  };

  const sendNewUser = (newUserDetails) => {
    return axiosInstance.post("users", newUserDetails);
  };

  const sendUpdatedUser = (dataUser) => {
    return axiosInstance.put(`users/${details._id}`, dataUser);
  };

  const { mutate: createNewUser } = useMutation({
    mutationKey: "new-user",
    mutationFn: sendNewUser,
    onSuccess: (res) => {
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        queryClient.invalidateQueries("fetch-users").then(() => {
          navigate("/cinema/users");
        });
      });
    },
    onError: (err) => {
      const { message } = err.response.data;
      displayAlert("error", message);
    },
  });

  const { mutate: updateUser } = useMutation({
    mutationKey: "update-user",
    mutationFn: sendUpdatedUser,
    onSuccess: (res) => {
      const { message } = res.data;
      displayAlert("success", message).then(() => {
        queryClient.invalidateQueries("fetch-users").then(() => {
          navigate("/cinema/users");
        });
      });
    },
    onError: (err) => {
      const { message } = err.response.data;
      displayAlert("error", message);
    },
  });

  const submitUserFormHandler = (event) => {
    event.preventDefault();

    const dataUser = {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      SessionTimeOut: sessionTimeout,
      Permissions: {
        movies: moviesPermissions,
        subscriptions: subscriptionsPermissions,
      },
    };
    if(mode === "create"){
      createNewUser(dataUser);
    }else{
      updateUser(dataUser);
    }
  };

  const titleForm =
    mode === "create"
      ? "New User"
      : `Edit User - ${details.FirstName} ${details.LastName}`;
  const buttonForm = mode === "create" ? "Save" : "Update";

  const validForm =
    validFirstname && validLastname && validSessionTimeout && validEmail;
  return (
    <form
      className={styles.userFormContainer}
      onSubmit={submitUserFormHandler}
    >
      <div className={styles.headerUserForm}>
        <span className={styles.titleForm}>{titleForm}</span>
      </div>
      <div className={styles.userFormFields}>
        <div className={styles.coupleFields}>
          <div style={{ width: "38%" }}>
            <TextField
              label="First Name"
              type="text"
              variant="standard"
              autoComplete="off"
              value={firstname}
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
              value={lastname}
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
              value={email}
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
              value={sessionTimeout}
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
            initialValue={details.moviesPermissions}
            onTransferPermissions={onUpdatePermissionsHandler}
          />
          <PermissionsList
            groupname="Subscriptions"
            initialValue={details.subscriptionsPermissions}
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
          {buttonForm}
        </Button>
        <Button
          type="button"
          variant="outlined"
          sx={{ width: "6rem" }}
          onClick={cancelHandler}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;

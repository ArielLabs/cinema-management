import { useState } from "react";
import useInput from "../../hooks/use-input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import styles from "./NewUserForm.module.css";

const NewUserForm = () => {
  const [moviesChecked, setMoviesChecked] = useState([
    { permission: "View", checked: false },
    { permission: "Create", checked: false },
    { permission: "Delete", checked: false },
    { permission: "Edit", checked: false },
  ]);
  const [subscriptionsChecked, setSubscriptionsChecked] = useState([
    { permission: "View", checked: false },
    { permission: "Create", checked: false },
    { permission: "Delete", checked: false },
    { permission: "Edit", checked: false },
  ]);

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

  const viewChangedHandler = (event) => {
    if (event.target.name === "movies") {
      setMoviesChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    } else {
      setSubscriptionsChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    }
  };

  const createChangedHandler = (event) => {
    if (event.target.name === "movies") {
      setMoviesChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    } else {
      setSubscriptionsChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    }
  };

  const deleteChangedHandler = (event) => {
    if (event.target.name === "movies") {
      setMoviesChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    } else {
      setSubscriptionsChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: prevState[3].checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    }
  };

  const editChangedHandler = (event) => {
    if (event.target.name === "movies") {
      setMoviesChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    } else {
      setSubscriptionsChecked((prevState) => {
        if (event.target.checked) {
          return [
            { permission: "View", checked: event.target.checked },
            { permission: "Create", checked: event.target.checked },
            { permission: "Delete", checked: event.target.checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        } else {
          return [
            { permission: "View", checked: prevState[0].checked },
            { permission: "Create", checked: prevState[1].checked },
            { permission: "Delete", checked: prevState[2].checked },
            { permission: "Edit", checked: event.target.checked },
          ];
        }
      });
    }
  };

  const submitNewUserFormHandler = (event) => {
    event.preventDefault();

    const moviesPermissions = moviesChecked
      .filter((m) => m.checked)
      .map((m) => m.permission);
    const subscriptionsPermissions = subscriptionsChecked
      .filter((s) => s.checked)
      .map((s) => s.permission);

    const newUser = {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      SessionTimeOut: sessionTimeout,
      Permissions: {
        movies: moviesPermissions,
        subscriptions: subscriptionsPermissions
      }
    }
    console.log(newUser);
  };

  const validForm = validFirstname && validLastname && validSessionTimeout && validEmail;
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
          <div className={styles.checkPermissions}>
            <span className={styles.titlePermission}>Movies Permission:</span>
            <FormControlLabel
              label="View"
              control={
                <Checkbox
                  name="movies"
                  color="default"
                  checked={moviesChecked[0].checked}
                  onChange={viewChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Create"
              control={
                <Checkbox
                  name="movies"
                  color="default"
                  checked={moviesChecked[1].checked}
                  onChange={createChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Delete"
              control={
                <Checkbox
                  name="movies"
                  color="default"
                  checked={moviesChecked[2].checked}
                  onChange={deleteChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Edit"
              control={
                <Checkbox
                  name="movies"
                  color="default"
                  checked={moviesChecked[3].checked}
                  onChange={editChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
          </div>
          <div className={styles.checkPermissions}>
            <span className={styles.titlePermission}>
              Subscriptions Permission:
            </span>
            <FormControlLabel
              label="View"
              control={
                <Checkbox
                  name="subscriptions"
                  color="default"
                  checked={subscriptionsChecked[0].checked}
                  onChange={viewChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Create"
              control={
                <Checkbox
                  name="subscriptions"
                  color="default"
                  checked={subscriptionsChecked[1].checked}
                  onChange={createChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Delete"
              control={
                <Checkbox
                  name="subscriptions"
                  color="default"
                  checked={subscriptionsChecked[2].checked}
                  onChange={deleteChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
            <FormControlLabel
              label="Edit"
              control={
                <Checkbox
                  name="subscriptions"
                  color="default"
                  checked={subscriptionsChecked[3].checked}
                  onChange={editChangedHandler}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
              }
              sx={{ color: "#b4b2b2" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          type="submit"
          variant="contained"
          disabled={!validForm}
          sx={{ bgcolor: "#383636", "&:hover": { bgcolor: "#514f4f" } }}
        >
          Add
        </Button>
      </div>
    </form>
  );
};

export default NewUserForm;

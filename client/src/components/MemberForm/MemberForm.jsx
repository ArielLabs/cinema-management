import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import styles from "./MemberForm.module.css";

const MemberForm = (prop) => {
  const { mode, member } = prop;
  const navigate = useNavigate();

  const {
    value: name,
    valueInputChangedHandler: nameInputChangedHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    validValue: validName,
    error: errorName,
  } = useInput(member.Name, (val) => {
    return val.trim().length > 0;
  });

  const {
    value: email,
    valueInputChangedHandler: emailInputChangedHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    validValue: validEmail,
    error: errorEmail,
  } = useInput(member.Email, (val) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,})$/i;
    return regex.test(String(val).toLowerCase());
  });

  const {
    value: city,
    valueInputChangedHandler: cityInputChangedHandler,
    valueInputBlurHandler: cityInputBlurHandler,
    validValue: validCity,
    error: errorCity,
  } = useInput(member.City, (val) => {
    return val.trim().length > 0;
  });

  const {
    value: phone,
    valueInputChangedHandler: phoneInputChangedHandler,
    valueInputBlurHandler: phoneInputBlurHandler,
    validValue: validPhone,
    error: errorPhone,
  } = useInput(member.Phone, (val) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(val);
  });

  const cancelHandler = () => {
    navigate("/cinema/subscriptions");
  };

  const submitMemberFormHandler = (event) => {
    event.preventDefault();
    
    const memberDetails = {
        Name: name,
        Email: email,
        City: city,
        Phone: phone
    }
    console.log(memberDetails);
  };

  const titleForm =
    mode === "create" ? "New Member" : `Edit Member - ${member.Name}`;
  const buttonForm = mode === "create" ? "Save" : "Update";

  const validForm = validName && validEmail && validCity && validPhone;

  return (
    <form
      className={styles.memberFormContainer}
      onSubmit={submitMemberFormHandler}
    >
      <div className={styles.headerMemberForm}>
        <span className={styles.titleMemberForm}>{titleForm}</span>
      </div>
      <div className={styles.memberFormFields}>
        <div className={styles.coupleFields}>
          <div style={{ width: "38%" }}>
            <TextField
              label="Name"
              type="text"
              variant="standard"
              autoComplete="off"
              value={name}
              onChange={nameInputChangedHandler}
              onBlur={nameInputBlurHandler}
              error={errorName}
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
        </div>
        <div className={styles.coupleFields}>
          <div style={{ width: "38%" }}>
            <TextField
              label="City"
              type="text"
              variant="standard"
              autoComplete="off"
              value={city}
              onChange={cityInputChangedHandler}
              onBlur={cityInputBlurHandler}
              error={errorCity}
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
              label="Phone"
              type="text"
              variant="standard"
              autoComplete="off"
              value={phone}
              onChange={phoneInputChangedHandler}
              onBlur={phoneInputBlurHandler}
              error={errorPhone}
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

export default MemberForm;

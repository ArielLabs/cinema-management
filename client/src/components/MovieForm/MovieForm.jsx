import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./MovieForm.module.css";

const submitMovieFormHandler = () => {};

const MovieForm = () => {
  return (
    <div className={styles.movieFormContainer}>
      <form className={styles.movieFormCard} onSubmit={submitMovieFormHandler}>
        <div className={styles.headerMovieForm}>
          <span className={styles.titleMovieForm}>New Movie</span>
        </div>
        <div className={styles.movieFormFields}>
          <div className={styles.coupleFields}>
            <div>
              <TextField
                label="Name"
                type="text"
                variant="standard"
                autoComplete="off"
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
            <div>
              <TextField
                label="Runtime"
                type="text"
                variant="standard"
                autoComplete="off"
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
            <div>
              <TextField
                label="Age Restriction"
                type="text"
                variant="standard"
                autoComplete="off"
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
            <div>
              <TextField
                label="Genres"
                type="text"
                variant="standard"
                autoComplete="off"
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
            <div>
              <TextField
                label="Premired"
                type="text"
                variant="standard"
                autoComplete="off"
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
            <div>
              <TextField
                label="Originl Language"
                type="text"
                variant="standard"
                autoComplete="off"
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
          <div className={styles.singleField}>
            <div style={{ width: "100%" }}>
              <TextField
                label="Image"
                type="text"
                variant="standard"
                autoComplete="off"
                sx={{
                  width: "100%",
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
          <div className={styles.singleField}>
            <div style={{ width: "100%" }}>
              <TextField
                label="Trailer"
                type="text"
                variant="standard"
                autoComplete="off"
                sx={{
                  width: "100%",
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
          <div className={styles.singleField}>
            <div style={{ width: "100%" }}>
              <TextField
                label="Plot"
                type="text"
                variant="outlined"
                multiline={true}
                rows={4}
                autoComplete="off"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b4b2b2",
                    },
                    "&:hover fieldset": {
                      borderColor: "#dbd8d8",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#dbd8d8",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#b4b2b2",
                    "&.Mui-focused": {
                      color: "#dbd8d8",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#dbd8d8",
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
          <Button type="button" variant="outlined" sx={{ width: "6rem" }}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;

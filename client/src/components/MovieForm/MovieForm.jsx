import { genresOptions, restricationsOptions } from "../../utils/constants";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useInput from "../../hooks/use-input";
import dayjs from "dayjs";
import {
  InputLabel,
  TextField,
  Button,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  ListItemText,
} from "@mui/material";
import styles from "./MovieForm.module.css";

const MovieForm = () => {
  const {
    value: name,
    valueInputChangedHandler: nameInputChangedHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    validValue: validName,
    error: errorName,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const {
    value: runtime,
    valueInputChangedHandler: runtimeInputChangedHandler,
    valueInputBlurHandler: runtimeInputBlurHandler,
    validValue: validRuntime,
    error: errorRuntime,
  } = useInput("", (val) => {
    if (val.trim().length === 0) return false;
    if (!/^\d+$/.test(val)) return false;
    return true;
  });

  const {
    value: restriction,
    valueInputChangedHandler: restrictionInputChangedHandler,
    valueInputBlurHandler: restrictionInputBlurHandler,
    validValue: validRestriction,
    error: errorRestriction,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const {
    value: genres,
    valueInputChangedHandler: genresInputChangedHandler,
    valueInputBlurHandler: genresInputBlurHandler,
    validValue: validGenres,
    error: errorGenres,
  } = useInput([], (val) => {
    return val.length > 0;
  });

  const {
    value: premired,
    valueInputChangedHandler: premiredInputChangedHandler,
    valueInputBlurHandler: premiredInputBlurHandler,
    validValue: validPremired,
    error: errorPremired,
  } = useInput("", (val) => {
    const { $y: year, $M: month, $D: day }  = dayjs(val);
    return (year && month && day);
  });

  const {
    value: language,
    valueInputChangedHandler: languageInputChangedHandler,
    valueInputBlurHandler: languageInputBlurHandler,
    validValue: validLanguage,
    error: errorLanguage,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const {
    value: image,
    valueInputChangedHandler: imageInputChangedHandler,
    valueInputBlurHandler: imageInputBlurHandler,
    validValue: validImage,
    error: errorImage,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const {
    value: trailer,
    valueInputChangedHandler: trailerInputChangedHandler,
    valueInputBlurHandler: trailerInputBlurHandler,
    validValue: validTrailer,
    error: errorTrailer,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const {
    value: plot,
    valueInputChangedHandler: plotInputChangedHandler,
    valueInputBlurHandler: plotInputBlurHandler,
    validValue: validPlot,
    error: errorPlot,
  } = useInput("", (val) => {
    return val.trim().length > 0;
  });

  const dateChangedHandler = (event) => {
    const { $y: year, $M: month, $D: day } = event;
    const utcDate = Date.UTC(year, month, day);
    premiredInputChangedHandler(utcDate);
  };

  const submitMovieFormHandler = (event) => {
    event.preventDefault();

    const movieDetails = {
      Name: name,
      Plot: plot,
      Genres: genres,
      Image: image,
      Trailer: trailer,
      AgeRestriction: restriction,
      Runtime: runtime,
      Premiered: premired,
      OriginalLanguage: language,
    };
    console.log(movieDetails);
  };

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 200,
      },
    },
  };

  const validForm =
    validName &&
    validRuntime &&
    validRestriction &&
    validGenres &&
    validPremired &&
    validLanguage &&
    validImage &&
    validTrailer &&
    validPlot;

  return (
    <div className={styles.movieFormContainer}>
      <form className={styles.movieFormCard} onSubmit={submitMovieFormHandler}>
        <div className={styles.headerMovieForm}>
          <span className={styles.titleMovieForm}>New Movie</span>
        </div>
        <div className={styles.movieFormFields}>
          <div className={styles.coupleFields}>
            <div style={{ width: "230px" }}>
              <TextField
                label="Name"
                type="text"
                variant="standard"
                autoComplete="off"
                onChange={nameInputChangedHandler}
                onBlur={nameInputBlurHandler}
                error={errorName}
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
            <div style={{ width: "230px" }}>
              <TextField
                label="Runtime"
                type="text"
                variant="standard"
                autoComplete="off"
                onChange={runtimeInputChangedHandler}
                onBlur={runtimeInputBlurHandler}
                error={errorRuntime}
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
          <div className={styles.coupleFields}>
            <div>
              <FormControl
                variant="standard"
                error={errorRestriction}
                sx={{
                  width: "230px",
                  "& label": {
                    color: "#b4b2b2",
                  },
                  "& label.Mui-focused": {
                    color: "#b4b2b2",
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
              >
                <InputLabel>Age Restriction</InputLabel>
                <Select
                  defaultValue={""}
                  onChange={restrictionInputChangedHandler}
                  onBlur={restrictionInputBlurHandler}
                  MenuProps={MenuProps}
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "#dbd8d8",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#dbd8d8",
                    },
                  }}
                >
                  {restricationsOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl
                variant="standard"
                error={errorGenres}
                sx={{
                  width: "230px",
                  "& label": {
                    color: "#b4b2b2",
                  },
                  "& label.Mui-focused": {
                    color: "#b4b2b2",
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
              >
                <InputLabel>Genres</InputLabel>
                <Select
                  multiple
                  value={genres}
                  onChange={genresInputChangedHandler}
                  onBlur={genresInputBlurHandler}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                  sx={{
                    "& .MuiInputBase-input": {
                      color: "#dbd8d8",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "#dbd8d8",
                    },
                  }}
                >
                  {genresOptions.map((genre) => (
                    <MenuItem key={genre} value={genre}>
                      <Checkbox checked={genres.indexOf(genre) > -1} />
                      <ListItemText primary={genre} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={styles.coupleFields}>
            <div style={{ width: "250px", height: "55px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker"]}
                  sx={{ height: "100%", width: "250px" }}
                >
                  <DatePicker
                    label="Premired"
                    onChange={dateChangedHandler}
                    onOpen={premiredInputBlurHandler}
                    slotProps={{
                      textField: {
                        variant: "standard",
                        error: errorPremired,
                        onBlur: premiredInputBlurHandler,
                      },
                      popper: { placement: "top-start" },
                    }}
                    sx={{
                      width: "230px",
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
                      "& .MuiSvgIcon-root": {
                        color: "#dbd8d8",
                      },
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div style={{ width: "230px" }}>
              <TextField
                label="Originl Language"
                type="text"
                variant="standard"
                autoComplete="off"
                onChange={languageInputChangedHandler}
                onBlur={languageInputBlurHandler}
                error={errorLanguage}
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
                label="Image"
                type="text"
                variant="standard"
                autoComplete="off"
                onChange={imageInputChangedHandler}
                onBlur={imageInputBlurHandler}
                error={errorImage}
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
                onChange={trailerInputChangedHandler}
                onBlur={trailerInputBlurHandler}
                error={errorTrailer}
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
                onChange={plotInputChangedHandler}
                onBlur={plotInputBlurHandler}
                error={errorPlot}
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
          <Button type="button" variant="outlined" sx={{ width: "6rem" }}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;

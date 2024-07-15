import { useMemo, useRef, useState } from "react";
import { axiosInstance } from "../../utils/http";
import {
  Modal,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./MovieSubscribe.module.css";

const Field = (prop) => {
  const { label, initValue, options, chosen } = prop;
  const [option, setOption] = useState(initValue);

  const optionsList = typeof options === "function" ? options() : options;

  const changedHandler = (event) => {
    const selectedOptionValue = event.target.value;
    const selectedOption = optionsList.find(
      (p) => p.Name === selectedOptionValue
    );
    setOption(selectedOptionValue);
    chosen(label, selectedOption);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        defaultValue=""
        value={option}
        label={label}
        onChange={changedHandler}
      >
        {optionsList.map((p) => (
          <MenuItem key={p._id} value={p.Name}>
            {p.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const MovieSubscribe = (prop) => {
  const { onOpen, onClose, members } = prop;
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({ member: null, movie: null, date: null });
  const [allScreening, setAllScreening] = useState([]);
  const membersRef = useRef([]);

  const formmater = (values) => {
    return values.message.map((member) => {
      return {
        _id: member._id,
        Name: member.Name,
      };
    });
  };

  const dateFormat = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const moviesOptions = () => {
    const unsubscribeMovies = allScreening.map((movie) => movie.MovieId);
    const uniqueUnsubscribeMovies = [
      ...new Set(unsubscribeMovies.map((m) => JSON.stringify(m))),
    ].map((str) => JSON.parse(str));
    return uniqueUnsubscribeMovies;
  };

  const screeningOptions = () => {
    return allScreening
      .filter((movie) => movie.MovieId._id === form.movie._id)
      .map((screen) => {
        return {
          _id: screen._id,
          Name: `${dateFormat(screen.Date)} - ${screen.Hour}, Hall: ${
            screen.Hall
          }`,
        };
      });
  };

  useMemo(() => {
    if (members) {
      membersRef.current = formmater(members);
    }
  }, [members]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isDisabled = () => {
    if (activeStep === 0) {
      return !form.member;
    } else if (activeStep === 1) {
      return !form.movie;
    }
    return !form.date;
  };

  const setSubscribeForm = async (label, value) => {
    if (label === "Member") {
      const response = await axiosInstance.get(
        `subscriptions/${value._id}/unsubscribe`
      );
      const { message: moviesWithScreening } = response.data;
      setAllScreening(moviesWithScreening);
      setForm((prevState) => {
        return {
          ...prevState,
          member: value,
        };
      });
    }

    if (label === "Movie") {
      setForm((prevState) => {
        return {
          ...prevState,
          movie: value,
        };
      });
    }

    if (label === "Day & Time") {
      setForm((prevState) => {
        return {
          ...prevState,
          date: value,
        };
      });
    }
  };

  const steps = [
    {
      label: "Select Member",
      content: (
        <Field
          label={"Member"}
          initValue={form.member ? form.member.Name : ""}
          options={membersRef.current}
          chosen={setSubscribeForm}
        />
      ),
    },
    {
      label: "Select Movie",
      content: (
        <Field
          label={"Movie"}
          initValue={form.movie ? form.movie.Name : ""}
          options={moviesOptions}
          chosen={setSubscribeForm}
        />
      ),
    },
    {
      label: "Choose a day and time",
      content: (
        <Field
          label={"Day & Time"}
          initValue={form.date ? form.date.Name : ""}
          options={screeningOptions}
          chosen={setSubscribeForm}
        />
      ),
    },
    {
      label: "Summary",
      content: `${form.member?.Name} ordered the movie ${
        form.movie?.Name
      } for the date ${form.date?.Name.split("-")[0]} at ${
        form.date?.Name.split("-")[1].split(",")[0]
      } in Hall ${form.date?.Name.split("-")[1].split(",")[1].split(":")[1]}`,
    },
  ];

  return (
    <Modal open={onOpen}>
      <Box className={styles.container}>
        <div className={styles.close}>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.content}
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      disabled={isDisabled()}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Modal>
  );
};

export default MovieSubscribe;

import { useMemo, useRef, useState } from "react";
import { axiosInstance } from "../../utils/http";
import { displayAlert } from "../../utils/alerts";
import { useMutation, useQueryClient } from "react-query";
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
  const [form, setForm] = useState({
    member: null,
    movie: null,
    screening: null,
  });
  const [allScreening, setAllScreening] = useState([]);
  const membersRef = useRef([]);
  const queryClient = useQueryClient();

  const sendSubscription = async (detailsSubscription) => {
    const subscriberId = allScreening.subscriptionId;
    if (subscriberId) {
      return await axiosInstance.put(
        `subscriptions/${subscriberId}`,
        detailsSubscription
      );
    }
    return await axiosInstance.post(`subscriptions`, detailsSubscription);
  };

  const { mutate: submitSubscribe } = useMutation({
    mutationKey: "subscribe-movie",
    mutationFn: sendSubscription,
    onSuccess: (res) => {
      const { message } = res.data;
      onCloseHandler();
      displayAlert("success", message).then(() => {
        queryClient.invalidateQueries("fetch-members");
      });
    },
    onError: (err) => {
      const { message } = err.response.data;
      displayAlert("error", message);
    },
  });

  const dateFormat = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const memberOptions = (values) => {
    return values.message.map((member) => {
      return {
        _id: member._id,
        Name: member.Name,
      };
    });
  };

  const moviesOptions = () => {
    const unsubscribeMovies = allScreening.moviesWithScreenings.map(
      (movie) => movie.MovieId
    );
    const uniqueUnsubscribeMovies = [
      ...new Set(unsubscribeMovies.map((m) => JSON.stringify(m))),
    ].map((str) => JSON.parse(str));
    return uniqueUnsubscribeMovies;
  };

  const screeningOptions = () => {
    return allScreening.moviesWithScreenings
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
      membersRef.current = memberOptions(members);
    }
  }, [members]);

  const onCloseHandler = () => {
    setActiveStep(0);
    setForm({ member: null, movie: null, screening: null });
    onClose();
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      const subscribeDetails = {
        MemberId: form.member._id,
        Screenings: form.screening._id,
      };
      submitSubscribe(subscribeDetails);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
    return !form.screening;
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

    if (label === "Screening") {
      setForm((prevState) => {
        return {
          ...prevState,
          screening: value,
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
      label: "Select Screening",
      content: (
        <Field
          label={"Screening"}
          initValue={form.screening ? form.screening.Name : ""}
          options={screeningOptions}
          chosen={setSubscribeForm}
        />
      ),
    },
    {
      label: "Summary",
      content: `${form.member?.Name} ordered the movie ${
        form.movie?.Name
      } for the date ${form.screening?.Name.split("-")[0]} at ${
        form.screening?.Name.split("-")[1].split(",")[0]
      } in Hall ${
        form.screening?.Name.split("-")[1].split(",")[1].split(":")[1]
      }`,
    },
  ];

  return (
    <Modal open={onOpen}>
      <Box className={styles.container}>
        <div className={styles.close}>
          <IconButton onClick={onCloseHandler}>
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
                      {index === steps.length - 1 ? "Subscribe" : "Continue"}
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

import { useState } from "react";
import {
  Modal,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./MovieSubscribe.module.css";

const MovieSubscribe = (prop) => {
  const { onOpen, onClose } = prop;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    {
      label: "Select Member",
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Select Movie",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Choose a day and time",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
    {
      label: "Summary",
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
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
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
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

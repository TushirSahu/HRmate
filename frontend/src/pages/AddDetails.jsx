import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { themeProvider } from "../context/themeContext";
import { Stepper, Step, StepLabel, Button, Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

function getSteps() {  
  return [
    "Basic information",
    "Personal Information",
  ];
}

const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <input
              id="title"
              name="title"
              spellCheck="false"
              placeholder="Enter Title for your job"
              className="w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white"
              {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <textarea
              id="description"
              name="description"
              spellCheck="false"
              placeholder="Enter a description for your job"
              className="w-full px-3 py-2 h-72 text-gray-700 border-2 rounded-md 
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white"
              {...field}
          />   
        )}
      />
    </>
  );
};

const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="salary"
        render={({ field }) => (
          <input
              id="salary"
              name="salary"
              spellCheck="false"
              placeholder="Enter Salary for your job"
              className="w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white"
              {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="location"
        render={({ field }) => (
        <input
            id="location"
            name="location"
            spellCheck="false"
            placeholder="Enter Your Location"
            className="w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
              focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white"
            {...field}
        />
        )}
      />   
      <Controller
        control={control}
        name="minQualification"
        render={({ field }) => (
          <div className="py-2">
            <FormLabel>
                Minimum Qualification
            </FormLabel>
            <RadioGroup {...field} row>
                <FormControlLabel
                    value="Bachelors"
                    control={<Radio />}
                    label="Bachelors"
                    className="dark:text-white"
                />
                <FormControlLabel
                    value="Masters"
                    control={<Radio />}
                    label="Masters"
                    className="dark:text-white"
                />
                <FormControlLabel
                    value="Phd"
                    control={<Radio />}
                    label="Phd"
                    className="dark:text-white"
                />
            </RadioGroup>   
        </div>
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}

const AddDetails = () => {
    const methods = useForm({
      defaultValues: {
        title: "",
        description: "",
        salary: "",
        location: "",
        skills: "",
        minQualification: "",
      },
    });

  const { theme, toggleTheme } = useContext(themeProvider);
  const [activeStep, setActiveStep] = useState(0);
  const bgtheme = createTheme({
    palette: {
      mode: theme,
    },
  })
  const steps = getSteps();

  const handleNext = () => {
    console.log(methods.getValues());
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={bgtheme}>
    <div>
      <Navbar/>
      <div className="md:px-48 px-8 py-8">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            return (
              <Step 
                key={index}
                sx={{
                  
                }}
              >
                <StepLabel>{step}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form 
              onSubmit={methods.handleSubmit((data) => console.log(data))}
              className="md:px-48 py-8 px-8"
            >
              {getStepContent(activeStep)}

              <div className="flex justify-center 
                items-center md:flex-row md:justify-between
                space-x-4 md:space-x-0 py-4"
              >
                <Button
                  disabled={activeStep === 0}
                  variant="outlined"
                  onClick={handleBack}
                  className="mt-4"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className="mt-4"
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>  
        </>
      )}
    </div>
    </ThemeProvider>
  );
}

export default AddDetails;
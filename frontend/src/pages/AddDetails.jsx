import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { themeProvider } from "../context/themeContext";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  ThemeProvider,
  createTheme,
  Autocomplete,
  Stack,
} from "@mui/material";

import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import ProtectedRoute from "../components/ProtectedRoute";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function getSteps() {
  return ["Basic information", "Personal Information"];
}

const skills = [
  "Python",
  "Java",
  "C++",
  "C",
  "C#",
  "JavaScript",
  "PHP",
  "SQL",
  "Swift",
  "Go",
  "Ruby",
  "Perl",
  "R",
  "Matlab",
  "Scala",
  "Kotlin",
  "Groovy",
  "Haskell",
  "Rust",
  "Erlang",
  "Clojure",
  "Dart",
  "Objective-C",
  "Visual Basic",
  "Delphi",
  "Assembly",
  "devops",
  "linux",
  "docker",
  "kubernetes",
  "aws",
  "azure",
  "gcp",
  "cloud",
  "git",
  "svn",
  "mercurial",
  "trello",
  "jira",
  "confluence",
  "flask",
  "django",
  "spring",
  "spring boot",
  "spring mvc",
  "spring security",
  "spring data",
  "spring cloud",
  "spring batch",
  "spring integration",
  "spring webflow",
  "spring web services",
  "spring amqp",
  "spring jms",
  "spring rest",
  "spring rest docs",
  "dsa",
  "data structures",
  "algorithms",
  "design patterns",
  "oop",
  "object oriented programming",
  "functional programming",
  "fp",
  "react",
  "angular",
  "vue",
  "node",
  "express",
  "mongodb",
  "mysql",
  "postgresql",
  "redis",
  "elasticsearch",
  "kafka",
  "rabbitmq",
  "graphql",
  "http",
  "tcp",
  "udp",
  "sockets",
  "rest",
  "soap",
  "cyber security",
  "ethical hacking",
  "network security",
  "web security",
  "application security",
  "cloud security",
  "mobile security",
  "iot security",
  "blockchain",
  "big data",
  "data science",
  "machine learning",
  "artificial intelligence",
  "ai",
  "deep learning",
  "nlp",
  "natural language processing",
  "computer vision",
  "cv",
  "image processing",
  "data mining",
  "data warehousing",
  "data visualization",
  "data analytics",
  "data engineering",
  "data architecture",
  "data modeling",
  "data governance",
  "data lakes",
  "data marts",
  "data cubes",
  "data warehouses",
  "data streaming",
  "data pipelines",
  "data wrangling",
  "data cleansing",
];

const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Controller
        control={control}
        name='title'
        render={({ field }) => (
          <input
            id='title'
            name='title'
            spellCheck='false'
            placeholder='Enter Title for your job'
            className='w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='description'
        render={({ field }) => (
          <textarea
            id='description'
            name='description'
            spellCheck='false'
            placeholder='Enter a description for your job'
            className='w-full px-3 py-2 h-72 text-gray-700 border-2 rounded-md 
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white'
            {...field}
          />
        )}
      />
    </motion.div>
  );
};

const PersonalForm = () => {
  const { control } = useFormContext();
  const [data, setData] = useState([]);

  const { setValue } = useFormContext();
  setValue("skills", data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Controller
        control={control}
        name='salary'
        render={({ field }) => (
          <input
            id='salary'
            name='salary'
            spellCheck='false'
            placeholder='Enter Salary for your job'
            className='w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
                focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='location'
        render={({ field }) => (
          <input
            id='location'
            name='location'
            spellCheck='false'
            placeholder='Enter Your Location'
            className='w-full px-3 py-5 mb-4 text-gray-700 border-2 rounded-md
              focus:outline-none dark:bg-gray-700 dark:border-none dark:text-white'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='skills'
        render={({ field }) => (
          <Stack
            spacing={2}
            sx={{
              width: "100%",
            }}
          >
            <Autocomplete
              value={data}
              onChange={(event, newValue) => {
                setData(newValue);
              }}
              multiple={true}
              id='tags-standard'
              options={skills}
              renderInput={(params) => (
                <TextField {...params} label='Skills' placeholder='Skills' />
              )}
            />
          </Stack>
        )}
      />
      <Controller
        control={control}
        name='minQualification'
        render={({ field }) => (
          <div className='py-2'>
            <FormLabel>Minimum Qualification</FormLabel>
            <RadioGroup {...field} row>
              <FormControlLabel
                value='Bachelors'
                control={<Radio />}
                label='Bachelors'
                className='dark:text-white'
              />
              <FormControlLabel
                value='Masters'
                control={<Radio />}
                label='Masters'
                className='dark:text-white'
              />
              <FormControlLabel
                value='Phd'
                control={<Radio />}
                label='Phd'
                className='dark:text-white'
              />
            </RadioGroup>
          </div>
        )}
      />
    </motion.div>
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
      skills: [],
      minQualification: "",
    },
  });

  const submitDetailsHandler = async (data) => {
    data = { ...data, skills: data.skills.join(",") };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/addJob",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      navigate(`/job/${response.data.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const showAlert = () => {
    toast.error("Please fill all the fields");
  };

  const { theme, toggleTheme } = useContext(themeProvider);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const bgtheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  const steps = getSteps();

  const handleNext = () => {
    console.log(methods.getValues());
    if (activeStep == 0) {
      if (!methods.getValues().title || !methods.getValues().description) {
        showAlert();
        return;
      }
    } else if (activeStep == 1) {
      if (
        !methods.getValues().salary ||
        !methods.getValues().location ||
        !methods.getValues().minQualification
      ) {
        showAlert();
        return;
      }
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ThemeProvider theme={bgtheme}>
      <Toaster />
      <ProtectedRoute>
        <Navbar />
        <div className='md:px-48 px-8 py-8'>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={index}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        {activeStep === steps.length ? (
          <>
            <Typography
              variant='h3'
              align='center'
              sx={{
                marginTop: "3rem",
              }}
            >
              <p className='dark:text-white'>Submit Details</p>
            </Typography>
            <Typography
              variant='h5'
              align='center'
              sx={{
                marginTop: "0.5rem",
              }}
            >
              <p className='dark:text-white'>
                All steps completed - you&apos;re finished
              </p>
            </Typography>
            <div className='flex justify-center items-center py-4'>
              <Button
                variant='contained'
                color='primary'
                className='dark:bg-purple-700 dark:text-white'
                onClick={() => submitDetailsHandler(methods.getValues())}
              >
                Submit Details
              </Button>
            </div>
          </>
        ) : (
          <>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((data) => console.log(data))}
                className='md:px-48 py-8 px-8'
              >
                {getStepContent(activeStep)}

                <div
                  className='flex justify-center 
                items-center md:flex-row md:justify-between
                space-x-24 md:space-x-0 py-4'
                >
                  <Button
                    disabled={activeStep === 0}
                    variant='outlined'
                    onClick={handleBack}
                    className='mt-4'
                  >
                    Previous
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className='mt-4 dark:bg-purple-700 dark:text-white'
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </ProtectedRoute>
    </ThemeProvider>
  );
};

export default AddDetails;

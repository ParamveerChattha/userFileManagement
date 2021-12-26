import React from "react";
import FilesInDisplay from "../pages/LibraryFiles";
import UserInputForm from "../pages/UserForm";
import ConfirmatoryPage from "../pages/confirmatory-page";
const FormSteps = (
  step,
  setStep,
  files,
  setFiles,
  userDetails,
  setUserDetails
) => [
  {
    title: "Choose a file",
    content: (
      <FilesInDisplay setStep={setStep} step={step} setFiles={setFiles} />
    ),
  },
  {
    title: "enter Use Details",
    content: (
      <UserInputForm
        setStep={setStep}
        step={step}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    ),
  },
  {
    title: "Confirmatory Page",
    content: (
      <ConfirmatoryPage
        step={step}
        setStep={setStep}
        userDetails={userDetails}
        files={files}
      />
    ),
  },
];
export default FormSteps;

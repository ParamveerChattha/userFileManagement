import React, { useState } from "react";
import FormSteps from "../form-steps";
import styles from "./_index.module.scss";

const FormModal = () => {
  let [step, setStep] = useState(0);
  let [files, setFiles] = useState();
  const [userDetails, setUserDetails] = useState();
  let steps = FormSteps(
    step,
    setStep,
    userDetails,
    setUserDetails,
    files,
    setFiles
  );

  return (
    <div className={styles.FileDisplay}>
      <h4>
        Step {step + 1}/{steps.length}
      </h4>
      <div className={styles.WizardBody}>{steps[`${step}`].content}</div>
    </div>
  );
};

export default FormModal;

import { useState } from "react";
import styles from "./_user-input-form.scss";
import Input from "../components/input";
import { isValid } from "../utils/validation";
import { Button } from "react-bootstrap";

const UserInputForm = ({ step, setStep, userDetails, setUserDetails }) => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //onChange
  const handleUser = ({ target }) => {
    target.name === "fullName" && setName(target.value);
    target.name === "address" && setAddress(target.value);
    target.name === "email" && setEmail(target.value);
    target.name === "phoneNumber" && setPhoneNumber(target.value);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setUserDetails("");
    setStep(step - 1);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const userDetail = {
      name: name,
      address: address,
      email: email,
      phoneNumber: phoneNumber,
    };
    setUserDetails(userDetail);
    const error = isValid(userDetail);
    setErrors(error);
    if (Object.keys(error).length > 0) return;
    setStep(step + 1);
  };
  return (
    <>
      <h2>Enter details</h2>
      <form onSubmit={handleContinue} className={styles.UserForm}>
        <Input
          type="text"
          name="fullName"
          value={name}
          label="Full Name"
          placeHolder="Name"
          onChange={(e) => handleUser(e)}
          error={errors.name}
        />
        <Input
          type="text"
          name="address"
          value={address}
          label="Address"
          placeHolder="Address"
          onChange={(e) => handleUser(e)}
          error={errors.address}
        />
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          placeHolder="Email"
          onChange={(e) => handleUser(e)}
          error={errors.email}
        />
        <Input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          label="Phone Number"
          placeHolder="Phone Number"
          onChange={(e) => handleUser(e)}
          error={errors.phoneNumber}
        />
        <div style={{ display: "inline-flex" }}>
          <Button
            variant="warning"
            type="submit"
            onClick={handlePrev}
            style={{ width: "14em" }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            type="submit"
            className={styles.NextButton}
            style={{ width: "14em", marginLeft: "2em" }}
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default UserInputForm;

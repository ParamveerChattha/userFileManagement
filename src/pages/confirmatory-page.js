import FileDisplay from "../components/table/table";
import Popup from "../components/confirmatoryPopup/Popup";
import { Button } from "react-bootstrap";
import { useState } from "react";

const ConfirmatoryPage = ({ step, setStep, userDetails, files }) => {
  const { name, address, email, phoneNumber } = userDetails;
  let [showPopup, setShowPopup] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setShowPopup(true);
  }

  function handleReset(event) {
    event.preventDefault();
    setStep(step - 2);
  }
  return (
    <>
      <h2>Please confirm the details</h2>
      <div style={{ marginLeft: "-1em" }}>
        <FileDisplay libraryFiles={files} showCheckbox={false} />
      </div>
      <div style={{ marginLeft: "2em" }}>
        {name && <p>name: {name}</p>}
        {address && <p>address: {address}</p>}
        {email && <p>email: {email}</p>}
        {phoneNumber && <p>phoneNumber: {phoneNumber}</p>}
        <div style={{ display: "inline-flex" }}>
          <Button
            variant="danger"
            onClick={handleReset}
            style={{ width: "14em" }}
          >
            Reset
          </Button>
          <Button
            variant="success"
            onClick={handleSubmit}
            style={{ width: "14em", marginLeft: "2em" }}
          >
            Submit
          </Button>
          {showPopup && (
            <Popup
              show={showPopup}
              setStep={setStep}
              style={{ width: "15em" }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ConfirmatoryPage;

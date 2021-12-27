import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import FileDisplay from "../components/table/table";
import styles from "./_library-files.module.scss";

const FilesInDisplay = ({ step, setStep, setFiles }) => {
  const [libraryFiles, setLibraryFiles] = useState([]);
  const [, setError] = useState("");
  const [filesSelected, setFilesSelected] = useState([]);

  useEffect(() => {
    axios
      .get("./fileDetails.json")
      .then((response) => {
        setLibraryFiles(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();
    setFiles(filesSelected);
    filesSelected.length > 0 && setStep(step + 1);
  }

  return (
    <>
      <h2>Upload or choose a file</h2>
      <FileDisplay
        libraryFiles={libraryFiles}
        setFilesSelected={setFilesSelected}
        filesSelected={filesSelected}
        showUpload={true}
      />
      <div style={{ display: "inline-flex", alignContent: "end" }}>
        <Button
          type="submit"
          className={styles.NextButton}
          onClick={onSubmitHandler}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default FilesInDisplay;

import { Table } from "react-bootstrap";
import _ from "lodash";
import { useEffect, useState } from "react";
import styles from "./_table.module.scss";

const FileDisplay = ({
  libraryFiles,
  filesSelected,
  setFilesSelected,
  showCheckbox = true,
  showUpload = false,
}) => {
  const [file, setFile] = useState();
  const [, setUserFileIncluded] = useState();

  useEffect(() => {}, [file]);

  function handleCheck(value) {
    let tempFileArray = [];
    tempFileArray = filesSelected;
    if (_.includes(tempFileArray, value)) {
      const index = tempFileArray.indexOf(value);
      tempFileArray.splice(index, 1);
      setFilesSelected(tempFileArray);
    } else {
      tempFileArray.push(value);
      setFilesSelected(tempFileArray);
    }
  }

  function handleUpload(event) {
    const localFileData = event.target.files[0];
    setFile(event.target.files[0]);

    const fileName =
      `${new Date(localFileData.lastModified).toLocaleDateString()}` +
      `${localFileData.name}`;

    const date = new Date(localFileData.lastModified)
      .toLocaleString()
      .split(",")[0];

    const uplodadedFile = { fileName: fileName, date: date };
    libraryFiles.push(uplodadedFile);
    setUserFileIncluded(libraryFiles);
  }
  return (
    <div className={styles.Table}>
      <Table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Date Created</th>
          </tr>
        </thead>
        <tbody>
          {libraryFiles.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.fileName}</td>
                <td>{val.date}</td>
                <td>
                  {showCheckbox && (
                    <input
                      id="defaultUnchecked"
                      type="checkbox"
                      data={val}
                      defaultChecked={false}
                      onChange={() => handleCheck(val, index)}
                    />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {showUpload && <input type="file" onChange={handleUpload} />}
    </div>
  );
};

export default FileDisplay;

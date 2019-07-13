import React from "react";
import FileUploader from "../form/fileUploader/FileUploader";
import { Redirect } from "react-router-dom";
import readExcel from "../../core/fileReaders/excelReader";
import Button from "../button/Button";
import SelectInput from "../form/input/SelectInput";
import CheckboxInput from "../form/input/CheckboxInput";

export default function FilesPage({
  handleFileInput,
  handleFileDeletion,
    handleSignChange,
  files: { data, error }
}) {
  return (
    <>
      <div className="page file-page">
        <div className="block input-block">
          <form>
            {error && <div>{error}</div>}
            <FileUploader
              label="Select File"
              onFileLoaded={(file, event) =>
                handleFileInput({
                  fileReader: readExcel.bind(null, event),
                  file
                })
              }
            />
          </form>
        </div>
        <div className="block table-block">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">File Name</th>
                  <th scope="col">Reverse transaction sign</th>
                <th scope="col">Deletion</th>
              </tr>
            </thead>
            <tbody>
              {data.map(file => (
                <tr key={file.id}>
                  <td>{file.name}</td>
                    <td><CheckboxInput id={file.id} checked={file.sign} onChange={()=>handleSignChange(file.id)}/></td>
                  <td>
                    <Button
                      label="Delete"
                      onClick={()=>handleFileDeletion(file.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

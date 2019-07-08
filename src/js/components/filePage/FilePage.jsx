import React from "react";
import FileUploader from "../form/fileUploader/FileUploader";
import { Redirect } from "react-router-dom";
import readExcel from "../../core/fileReaders/excelReader";
import Button from "../button/Button";

export default function FilesPage({
  handleFileInput,
  handleFileDeletion,
  files: { data, error }
}) {
  return (
    <>
      <div className="file-page">
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
            <thead className="thead-light">
              <tr>
                <th scope="col">File Name</th>
                <th scope="col">Deletion</th>
              </tr>
            </thead>
            <tbody>
              {data.map(file => (
                <tr key={file.id}>
                  <td>{file.name}</td>
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

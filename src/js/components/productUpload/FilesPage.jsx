import React from "react";
import FileUploader from "../form/fileUploader/FileUploader";
import { Redirect } from "react-router-dom";
import readExcel from "../../core/fileReaders/excelReader";

export default function FilesPage({ handleFileInput, files: { data, error } }) {
  return (
    <>
      <div className="files-page">
        {error && <div>{error}</div>}
        <form>
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
    </>
  );
}

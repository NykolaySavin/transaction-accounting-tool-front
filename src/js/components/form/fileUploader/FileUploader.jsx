import React from "react";

export const handleFileUpload = (onFileLoaded, e) => {
  var files = e.target.files,
    f = files[files.length - 1];
  var reader = new FileReader();
  reader.onloadend = onFileLoaded.bind(null, f);
  reader.readAsBinaryString(f);
  e.target.value = null;
};
export default function FileUploader({ label, onFileLoaded }) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
        </span>
      </div>
      <div className="custom-file">
        <label htmlFor="file" className="custom-file-label">
          {label}
        </label>
        <input
          type="file"
          className="custom-file-input"
          id="file"
          name="file"
          onChange={handleFileUpload.bind(this, onFileLoaded)}
        />
      </div>
    </div>
  );
}

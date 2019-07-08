import React from "react";

export  const handleFileUpload = (onFileLoaded,e) => {
    var files = e.target.files,
        f = files[files.length - 1];
    var reader = new FileReader();
    reader.onloadend = onFileLoaded.bind(null,f);
    reader.readAsBinaryString(f);
    e.target.value = null;
};
export default function FileUploader({ label,onFileLoaded }) {

  return (
    <div className="form-group">
      <label htmlFor="file">{label}</label>
      <input type="file" className="form-control-file" id="file" name="file" onChange={handleFileUpload.bind(this,onFileLoaded)}/>
    </div>
  );
}

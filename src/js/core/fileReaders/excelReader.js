import XLSX from "xlsx";
export default function readExcel(event) {
  var rABS = true;
  var data = event.target.result;
  if (!rABS) data = new Uint8Array(data);
  var workbook = XLSX.read(data, { type: rABS ? "binary" : "array" });
  var fileData = XLSX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]],
    { raw: false }
  );
  return fileData;
}

import { connect } from "react-redux";
import FilesPage from "./FilePage";
import {
  handleFileDeletion,
  handleFileInput
} from "../../redux/modules/productUpload.module.input";

export const mapDispatchToProps = {
  handleFileInput,
  handleFileDeletion
};
export const mapStateToProps = state => {
  return {
    files: state.files
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilesPage);

import { connect } from "react-redux";
import FilesPage from "./FilesPage";
import {
  handleFileInput
} from "../../redux/modules/productUpload.module.input";

export const mapDispatchToProps = {
  handleFileInput: handleFileInput
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

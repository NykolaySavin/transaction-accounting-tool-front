import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import CategoryPage from "./CategoryPage";
import * as category from "../../core/forms/category.form";
import { handleSubmit } from "../../redux/modules/category.module";
import { withRouter } from "react-router-dom";

export const mapDispatchToProps = { onSubmit: handleSubmit };
export const mapStateToProps = state => {
  return { ...state };
};
export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(reduxForm({ form: category.form })(CategoryPage))
);

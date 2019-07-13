import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import CategoryPage from "./CategoryPage";
import * as category from "../../core/forms/category.form";
import { handleSubmit } from "../../redux/modules/category.module";
import { withRouter } from "react-router-dom";

export const mapDispatchToProps = { onSubmit: handleSubmit };
export const mapStateToProps = (state, ownProps) => {
  let initialValues = state.categories.data.find(
    item => item.id == ownProps.match.params.id
  );
  if (!initialValues) initialValues = { name: "", type: "Credit", percent: 0 };
  return { initialValues };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ form: category.form })(CategoryPage))
);

import { connect } from "react-redux";
import CategoryListPage from "./CategoryListPage";
import { handleDeletion } from "../../redux/modules/category.module";

export const mapDispatchToProps = {
  handleDeletion: handleDeletion
};
export const mapStateToProps = state => {
  return {
    items: state.categories.data
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListPage);

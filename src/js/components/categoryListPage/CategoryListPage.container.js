import { connect } from "react-redux";
import CategoryPage from "./CategoryListPage";

export const mapDispatchToProps = {};
export const mapStateToProps = state => {
  return {
    items: state.categories.data
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);

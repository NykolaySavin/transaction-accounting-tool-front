import { connect } from "react-redux";
import TablePage from "./TablePage";
import uuid from "uuid/v1";
import {
  handleCategoryChange,
  handleColumnUseChange,
  handleMultipleCategoryChange,
  handleRowUseChange
} from "../../redux/modules/table.module";

export const mapDispatchToProps = {
  onCategoryChange: handleCategoryChange,
  handleRowCheckbox: handleRowUseChange,
  handleColumnCheckbox: handleColumnUseChange,
  onMultipleCategoryChange: handleMultipleCategoryChange
};
export const mapStateToProps = state => {
  return {
    items: state.transactions,
    categories: state.categories.data,
    unusedRows: state.unusedRows,
    unusedColumns: state.unusedColumns
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePage);

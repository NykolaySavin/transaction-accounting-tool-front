import { connect } from "react-redux";
import ResultPage from "./ResultPage";
import * as table from "../../core/dataFunctions/table";
import * as resultReducer from "../../core/dataFunctions/result";

export const mapStateToProps = state => {
  return {
    tables: resultReducer
      .groupTransactions(
        table.filterUnusedData(
          state.transactions,
          state.unusedColumns,
          state.unusedRows
        ),
        "Category"
      )
      .map(resultReducer.mapTransactionGroup.bind(null, state.categories.data))
  };
};
export default connect(
  mapStateToProps,
  null
)(ResultPage);

import { connect } from "react-redux";
import ResultPage from "./ResultPage";
import  * as table from '../../core/dataFunctions/table';

export const mapStateToProps = state => {
    return {
        transactions: table.filterUnusedData(state.transactions,state.unusedColumns,state.unusedRows),
        categories:state.categories.data,
    };
};
export default connect(
    mapStateToProps,
    null
)(ResultPage);

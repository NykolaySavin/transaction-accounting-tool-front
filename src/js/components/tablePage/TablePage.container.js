import { connect } from "react-redux";
import TablePage from "./TablePage";
import uuid from "uuid/v1";
import {handleCategoryChange} from "../../redux/modules/table.module";

export const mapDispatchToProps = {
    onCategoryChange:handleCategoryChange
};
export const mapStateToProps = state => {
    return {
        items: state.transactions,
        categories:state.categories.data,
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TablePage);

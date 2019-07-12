import React from "react";
import * as resultReducer from '../../core/dataFunctions/result';
import Button from "../button/Button";


export default function ResultPage({transactions,categories}) {
    console.dir(transactions)
    const groups = resultReducer.groupTransactions(transactions,'Category');
    const tables = groups.map(resultReducer.mapTransactionGroup.bind(null,categories));
    console.dir(groups);
    console.dir(tables);
    return (
        <>
            <div className="page result-page">
                <div className="block ">
                    <Button onClick={()=>resultReducer.createExcelOutput(tables)} label='Download result'/>
                </div>
            </div>
        </>
    );
}

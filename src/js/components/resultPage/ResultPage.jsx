import React, {useState} from "react";
import * as resultReducer from '../../core/dataFunctions/result';
import Button from "../button/Button";
import TextInput from "../form/input/TextInput";


export default function ResultPage({tables}) {
    const [additionalAdjustment,setAdditionalAdjustment]=useState('');
    const [monthAdjustment,setMonthAdjustment]=useState('');
    return (
        <>
            <div className="page result-page">
                <div className='block'>
                    <TextInput label='Additional Adjustment' fieldName='additionalAdjustment' onChange={setAdditionalAdjustment}/>
                    <TextInput label='Month Adjustment' fieldName='monthAdjustment' onChange={setMonthAdjustment}/>
                </div>
                <div className="block ">
                    <Button onClick={()=>resultReducer.createExcelOutput(tables,additionalAdjustment,monthAdjustment)} label='Download result'/>
                </div>
            </div>
        </>
    );
}

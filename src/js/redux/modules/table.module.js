import { createAction } from "redux-act";

export const handleCategoryChange = createAction(
    "handle category change",
    ({categoryId,id}) => ({categoryId,id})
);
export const reducer = {
    [handleCategoryChange]: (state, {categoryId,id}) => {
        const transactionIndex = state.transactions.findIndex(t=>t.id==id);
        const transactions = state.transactions.slice(0);
        if(!categoryId||!transactions[transactionIndex])
            return {...state};

        transactions.splice(transactionIndex,1,{...transactions[transactionIndex],'Category':categoryId})
        return {...state,transactions};
    },
};

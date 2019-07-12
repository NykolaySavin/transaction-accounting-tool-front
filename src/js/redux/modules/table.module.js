import { createAction } from "redux-act";

export const handleCategoryChange = createAction(
  "handle category change",
  ({ categoryId, id }) => ({ categoryId, id })
);
export const handleMultipleCategoryChange = createAction(
  "handle multiple category change",
  ({ categoryId, selectedIds }) => ({ categoryId, selectedIds })
);
export const handleRowUseChange = createAction(
  "handle row use change",
  id => id
);
export const handleColumnUseChange = createAction(
  "handle column use change",
  key => key
);
export const reducer = {
  [handleCategoryChange]: (state, { categoryId, id }) => {
    const transactionIndex = state.transactions.findIndex(t => t.id == id);
    const transactions = state.transactions.slice(0);
    if (!categoryId || !transactions[transactionIndex]) return { ...state };

    transactions.splice(transactionIndex, 1, {
      ...transactions[transactionIndex],
      Category: categoryId
    });
    return { ...state, transactions };
  },
  [handleMultipleCategoryChange]: (state, { categoryId, selectedIds }) => {
    const transactions = state.transactions.slice(0);
    selectedIds.forEach(id => {
      const transactionIndex = state.transactions.findIndex(t => t.id == id);

      if (!categoryId || !transactions[transactionIndex]) return { ...state };

      transactions.splice(transactionIndex, 1, {
        ...transactions[transactionIndex],
        Category: categoryId
      });
    });

    return { ...state, transactions };
  },
  [handleRowUseChange]: (state, id) => {
    if (state.unusedRows.some(row => row == id))
      return {
        ...state,
        unusedRows: state.unusedRows.filter(row => row != id)
      };
    else return { ...state, unusedRows: [...state.unusedRows, id] };
  },
  [handleColumnUseChange]: (state, key) => {
    if (state.unusedColumns.some(row => row == key))
      return {
        ...state,
        unusedColumns: state.unusedColumns.filter(row => row != key)
      };
    else return { ...state, unusedColumns: [...state.unusedColumns, key] };
  }
};

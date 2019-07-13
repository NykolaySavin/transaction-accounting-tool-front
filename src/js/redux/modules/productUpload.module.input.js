import { createAction } from "redux-act";
import uuid from "uuid/v1";

export const handleFileInput = createAction(
  "handle file upload",
  ({ fileReader, file }) => ({ fileReader, file })
);
export const handleSignChange = createAction("handle sign change", id => id);
export const setDefaultState = createAction("set default state");
export const handleFileDeletion = createAction(
  "handle file deletion",
  id => id
);
const connectTransactions = data =>
  data.reduce(
    (acc, cur) => [
      ...acc,
      ...cur.data.map(item => {
        const result = { ...item, id: uuid(), Category: "" };
        if (result.Amount && cur.sign) result.Amount *= -1;
        return result;
      })
    ],
    []
  );
export const reducer = {
  [handleFileInput]: (state, { file, fileReader }) => {
    try {
      const data = new fileReader();
      const files = [
        ...state.files.data,
        { data, name: file.name, id: uuid(), sign: false }
      ];
      const newState = {
        ...state,
        files: {
          data: files
        },
        transactions: connectTransactions(files)
      };
      return newState;
    } catch (e) {
      const newState = {
        ...state,
        files: { ...state.files, error: e.message },
        transactions: connectTransactions([...state.files.data])
      };
      return newState;
    }
  },
  [setDefaultState]: () => ({
    files: { data: [] },
    transactions: []
  }),
  [handleFileDeletion]: (state, id) => ({
    ...state,
    files: { data: state.files.data.filter(file => file.id != id) },
    transactions: connectTransactions(
      state.files.data.filter(file => file.id != id)
    )
  }),
  [handleSignChange]: (state, id) => {
    const file = state.files.data.find(f => f.id == id);
    file.sign = !file.sign;
    const files = [...state.files.data];
    files.splice(files.findIndex(f => f.id == id), 1, file);
    return {
      ...state,
      files: { data: files },
      transactions: connectTransactions(files)
    };
  }
};

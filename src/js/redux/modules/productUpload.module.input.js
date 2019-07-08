import { createAction } from "redux-act";
import uuid from "uuid/v1";

export const handleFileInput = createAction(
  "handle file upload",
  ({ fileReader, file }) => ({ fileReader, file })
);
export const setDefaultState = createAction("set default state");
export const handleFileDeletion = createAction(
  "handle file deletion",
  id => id
);
export const reducer = {
  [handleFileInput]: (state, { file, fileReader }) => {
    try {
      const data = new fileReader();
      const newState = {
        ...state,
        files: {
          data: [...state.files.data, { data, name: file.name, id: uuid() }]
        }
      };
      return newState;
    } catch (e) {
      const newState = {
        ...state,
        files: { ...state.files, error: e.message }
      };
      return newState;
    }
  },
  [setDefaultState]: () => ({
    files: { data: [] }
  }),
  [handleFileDeletion]: (state, id) => ({
    ...state,
    files: { data: state.files.data.filter(file => file.id != id) }
  })
};

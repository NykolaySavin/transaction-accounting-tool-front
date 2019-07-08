import { createAction } from "redux-act";

export const handleFileInput = createAction(
  "handle file upload",
  ({ fileReader, file }) => ({ fileReader, file })
);
export const setDefaultState = createAction("set default state");

export const reducer = {
  [handleFileInput]: (state, { file, fileReader }) => {
    try {
      const data = new fileReader();
      const newState = {
        ...state,
        files: { data: [...state.files.data, { data, name: file.name }] }
      };
      console.dir(newState);
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
  })
};

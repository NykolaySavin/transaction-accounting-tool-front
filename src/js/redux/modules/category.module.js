import { createAction } from "redux-act";

export const handleSubmit = createAction(
  "handle category submit",
  item => item
);
export const reducer = {
  [handleSubmit]: (state, item) => {
    console.dir(item);
    return { ...state, categories: { data: [...state.categories.data, item] } };
  }
};

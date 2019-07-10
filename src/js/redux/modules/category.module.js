import { createAction } from "redux-act";
import uuid from "uuid/v1";
import { handleFileDeletion } from "./productUpload.module.input";

export const handleSubmit = createAction(
  "handle category submit",
  item => item
);
export const handleDeletion = createAction(
  "handle category deletion",
  id => id
);
export const reducer = {
  [handleSubmit]: (state, item) => {
    if (item.id) {
      return {
        ...state,
        categories: {
          data: [
            ...state.categories.data.filter(o => o.id != item.id),
            { ...item }
          ]
        }
      };
    } else {
      return {
        ...state,
        categories: {
          data: [...state.categories.data, { ...item, id: uuid() }]
        }
      };
    }
  },
  [handleDeletion]: (state, id) => ({
    ...state,
    categories: { data: state.categories.data.filter(item => item.id != id) }
  })
};

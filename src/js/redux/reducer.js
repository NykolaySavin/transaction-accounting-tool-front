import { createReducer } from "redux-act";
import * as productUpload from "./modules/productUpload.module.input";
import * as category from "./modules/category.module";
import { state } from "./state/app.state";

export default createReducer(
  { ...productUpload.reducer, ...category.reducer },
  state
);

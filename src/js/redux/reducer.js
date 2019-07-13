import { createReducer } from "redux-act";
import * as productUpload from "./modules/productUpload.module.input";
import * as category from "./modules/category.module";
import * as table from "./modules/table.module";
import { state } from "./state/app.state";

export default createReducer(
  { ...productUpload.reducer, ...category.reducer, ...table.reducer },
  state
);

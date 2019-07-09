import { createStore } from "redux";
import rootReducer from "./reducer";
import { state, test } from "./state/app.state";
import { reducer as formReducer } from "redux-form";
import initializeStore from "./state/initializeStore";

const combinedReducer = (state, action) => ({
  ...rootReducer(state, action),
  form: formReducer(state.form, action)
});
const store = createStore(combinedReducer, {
  ...(process.env.NODE_ENV === "test" ? test : state)
});
initializeStore(store);

export default store;

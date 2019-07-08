import { createStore } from 'redux';
import rootReducer from './reducer';
import { state, test } from './state/app.state';
import initializeStore from './state/initializeStore';

const store = createStore(
  rootReducer,
  { ...(process.env.NODE_ENV === 'test' ? test : state) },
);
initializeStore(store);

export default store;

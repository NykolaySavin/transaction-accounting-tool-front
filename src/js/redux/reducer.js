import { createReducer } from 'redux-act';
import * as productUpload from './modules/productUpload.module.input';
import {state} from './state/app.state';

export default createReducer({...productUpload.reducer},state);

import React from 'react';
import ReactDOM from 'react-dom';
import './scss/styles.scss';
import { Provider } from 'react-redux';
import store from './js/redux/store';
import App from './js/components/index/App';

require('es6-promise').polyfill();
require('isomorphic-fetch');


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

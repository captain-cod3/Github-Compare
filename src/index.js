import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import reducer from './reducer'
import {createStore} from 'redux';
import { Provider } from 'react-redux';

export const store = createStore(
reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.querySelector("#root")
);
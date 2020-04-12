import 'antd/dist/antd.css';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";

import initialState from './state/state';
import configureStore from './state/store';
import rootSaga from './state/sagas';

const store = configureStore(initialState);
store.runSaga(rootSaga);

const container = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

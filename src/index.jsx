import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";

import initialState from './services/state';
import configureStore from './services/store';
import rootSaga from './services/sagas';

const store = configureStore(initialState);
store.runSaga(rootSaga);

const container = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);

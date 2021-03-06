import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
//user imports
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from "./reducers";
import logger from "redux-logger";

const todoStore = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={todoStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

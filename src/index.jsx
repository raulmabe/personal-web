import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./state/reducers";
import thunkMiddleware from "redux-thunk";
import { fetchProjects } from "./state/middleware";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchProjects());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

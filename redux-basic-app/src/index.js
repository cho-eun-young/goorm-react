import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import counter from "./reducers";
import rootReduceer from "./reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";

// Thunk 미들웨어
// Redux => Redux Toolkit

const root = ReactDOM.createRoot(document.getElementById("root"));

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("store", store);
  console.log("action", action);
  next(action);
};

const middleware = applyMiddleware(thunk, loggerMiddleware);

const store = createStore(rootReduceer, middleware);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </Provider>
  </React.StrictMode>
);

// action이 발생할때마다 리스너를 다시 호출

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

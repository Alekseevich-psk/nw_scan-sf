import "./common/animation-picture";

import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import combineReducers from "./reducers/index";
import { createStore } from "redux";
const store = createStore(combineReducers);

// console.log(store.getState().authStore);

// Init App
const root = ReactDOM.createRoot(document.getElementById("app"));

// Components
import App from "./components/App.jsx";

// Start app
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

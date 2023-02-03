import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

// Redux
import { Provider } from "react-redux";
import combineReducers from "./reducers/index";
import { createStore } from "redux";

import App from "./components/App";

const store = createStore(combineReducers);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

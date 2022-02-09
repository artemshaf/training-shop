//libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//files
import "./index.css";
import App from "./App";
import store from "./store/index";
import './fonts.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

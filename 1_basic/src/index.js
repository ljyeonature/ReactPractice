import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// import App from "./1_component_basic/App1_class";
// import App from "./1_component_basic/App1_func";
// import App from "./1_component_basic/App2_tag";
// import App from "./1_component_basic/App3_variable";

// import App from "./2_props/App1_Book";
// import App from "./2_props/App2_Button";
import App from "./2_props/App3_MyHeader";

// import App from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

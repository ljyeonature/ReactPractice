import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// import App from "./1_condition/1_truthy";
// import App from "./1_condition/2_inline";
// import App from "./1_condition/3_element_variable";
// import App from "./1_condition/4_stop_render";
// import App from "./2_form/form";
// import App from "./3_props_children/1_containment";
// import App from "./3_props_children/2_containment";
import App from "./3_props_children/99_ex";

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

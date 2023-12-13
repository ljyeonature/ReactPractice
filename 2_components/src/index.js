import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// import App from "./a_kind/App_component";
// import App from "./b_ex_comment/CommentList";
// import App from "./c_state/App1_event";
// import App from "./c_state/App2_state변경_class";
// import App from "./c_state/App2_state변경_func";
// import App from "./c_state/App3_배열변경";
// import App from "./c_state/App4_연습_func";
// import App from "./c_state/App4_연습_class";
// import App from "./c_state/App7_연습기본_func";
// import App from "./d_lifecycle/App1_class_lifecycle";
// import App from "./d_lifecycle/App1_func_lifecycle";
// import App from "./c_state/App9_복습";
// import App from "./e_hook/App_useEffect";
import App from "./e_hook/App_userHook";

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

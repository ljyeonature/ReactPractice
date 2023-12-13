// App9_복습.js

import { useState } from "react";
import "../App.css";

function App() {
  // 변수선언 -  변경되는 값
  // 함수형 컴포넌트에는 useState() 이용
  let [title, setTitle] = useState("맛집정보");

  return (
    <div className="App">
      <ul>
        <li
          onClick={() => {
            setTitle("호남식당");
          }}
        >
          호남식당
        </li>
        <li
          onClick={() => {
            setTitle("경남식당");
          }}
        >
          경남식당
        </li>
        <li
          onClick={() => {
            setTitle("경기식당");
          }}
        >
          경기식당
        </li>
      </ul>
      <hr />
      <div className="App-header">{title}</div>
    </div>
  );
}

export default App;

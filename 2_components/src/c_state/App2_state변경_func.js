// App2_state변경_func.js
import "../App.css";
import { useState } from "react";
function App() {
  // 정적 데이터(일반변수)
  let title = "우리 동네 사이트";
  // 변경 데이터 => 요소분해
  //   let [title, setTitle] = useState(초기값);
  let [favorite, setFavorite] = useState("맛집정도");

  return (
    <div className="App">
      <div className="App-link">{title}</div>
      <div className="App-subtitle">{favorite}</div>
      <hr />
      <button
        onClick={() => {
          title = "너네 동네";
        }}
      >
        일반변수값 변경
      </button>
      <br />
      <button
        onClick={() => {
          favorite = "튀김맛집";
        }}
      >
        state 변수 값 직접 변경
      </button>
      <br />
      <button
        onClick={() => {
          setFavorite("달인의 맛집");
        }}
      >
        setter 이용 값 변경
      </button>
    </div>
  );
}

export default App;

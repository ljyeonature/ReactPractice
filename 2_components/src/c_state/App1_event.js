// App1_event.js

import "../App.css";

function App() {
  function test() {
    alert("확인1");
  }
  return (
    <div className="App">
      {/* 이벤트 처리 아님 */}
      {/* <button onClick={alert("확인0")}>이벤트확인0</button> */}
      <hr />
      <button onClick={test}>이벤트확인1</button>
      <button
        onClick={function () {
          alert("확인2");
        }}
      >
        이벤트확인2
      </button>
      <button
        onClick={() => {
          alert("확인3");
        }}
      >
        이벤트확인3
      </button>
    </div>
  );
}

export default App;

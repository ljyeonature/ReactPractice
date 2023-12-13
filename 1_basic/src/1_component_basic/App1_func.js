// 1_component_basic / App1_func.js

/*
    function 컴포넌트
        - render() 함수 없음
        - 이름은 대문자로 지정
*/
import "../App.css";
function App() {
  let title = "우리 사이트 -2";

  return (
    <div className="App">
      <div className="App-logo">{title}</div>
    </div>
  );
}

export default App;

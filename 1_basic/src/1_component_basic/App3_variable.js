// App3_variable.js
import "../App.css";

let message = "감사합니다";
let styleA = "App-link";
let styleB = { color: "blue", fontSize: "30px" };

let styleLogo = "App-logo";
// let style-logo = "App-logo"; // kebob-casing
let style_logo = "App-logo";

function msg() {
  return "짝꿍님 뭐 먹을까요?";
}

function App() {
  // JSX 문법
  // 여기서 주석
  return (
    <div>
      {/* 
        1) img 태그 반드시 닫기
        2) 이미지 현재 디렉토리 위치가 public 폴더임
    */}
      <img src="./cat.png"></img>
      <h1>{message}</h1>
      <h1 className="App-link">{message}</h1>
      <h1 className={styleA}>{message}</h1>
      <h1 style={styleB}>{message}</h1>
      <h1 style={{ color: "blue", fontSize: "30px" }}>{message}</h1>
      <h2>{msg()}</h2>
    </div>
  );
}

export default App;

/**
  표기법
  1) 카멜표기법         : camelCasing
  2) 케밥표기법         : kebob-casing => JS에서는 놉
  3) 스네이크표기법     : snake_casing
 */

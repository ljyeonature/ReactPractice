// 1_component_basic / App1_class.js

import { Component } from "react";

/*
    컴포넌트 만들기
    1) 클래스 컴포넌트
        - Component 클래스 상속 필수
        - render() 함수 필요

    2) functioin 컴포넌트
*/

import "../App.css";

class App extends Component {
  render() {
    let title = "우리 사이트 -1";
    // ***********************
    // 자바스크립트  코드 안에서 return 부분이 html 요소들임
    // 리턴 안에 JSX 문법
    return (
      // 리턴되는 태그는 반드시 루트 태그 1개여야 함
      <div className="App">
        <div className="App-logo">
          {/* 주석 : title 변수 출력 */}
          {/* 주석을 먼저 작성 */}
          {title}
        </div>
      </div>
    );
  }
}

export default App;

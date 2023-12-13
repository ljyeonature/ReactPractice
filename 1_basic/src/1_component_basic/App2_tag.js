// App2_tag.js

/*
  컴포넌트를 왜 사용하나?

*/

import { Component } from "react";
import "../App.css";

// [1] 함수형 컴포넌트
function MyHeader() {
  return (
    <header>
      <h1 className="App-link">우리사이트</h1>
      <p>우리는 리액트로 만든다</p>
    </header>
  );
}

/*
    MyFooter 컴포넌트 - 클래스형으로
    광고사이트라고 출력
    2번만 반복 출력
*/

class MyFooter extends Component {
  render() {
    return (
      <footer className="App-logo">
        <p>우리 광고주</p>
      </footer>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <MyHeader></MyHeader>
      <MyHeader />
      <MyFooter></MyFooter>
      <MyFooter />
    </div>
  );
}

export default App;

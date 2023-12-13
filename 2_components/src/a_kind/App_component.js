// a_kind / App_component.js

// import { Component } from "react";
import React from "react";

function FuncHello(props) {
  return (
    <div>
      <h1>안녕, {props.name}</h1>
      <h5>{`${props.name} 님 반갑습니다`}</h5>
    </div>
  );
}

class ClassHello extends React.Component {
  render() {
    return (
      <div>
        <h1>안녕, {this.props.name}</h1>
        <h5>{`${this.props.name} 님 반갑습니다`}</h5>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      함수 컴포넌트 : <FuncHello name="홍길동"></FuncHello>
      <hr />
      클래스 컴포넌트 : <ClassHello name="홍길동"></ClassHello>
    </div>
  );
}

export default App;

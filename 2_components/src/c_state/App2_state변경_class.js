// App2_state변경_class.js

import "../App.css";
const { Component } = require("react");

class App extends Component {
  constructor(props) {
    super(props);
    // 정적인 데이터
    this.title = "우리동네 사이트";

    // 변경 데이터
    this.state = {
      favorite: "맛집찾기",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-link">{this.title}</div>
        <div className="App-subtitle">{this.state.favorite}</div>
        <hr />
        <button
          onClick={() => {
            this.title = "너네동네";
            // this.forceUpdate();
          }}
        >
          일반변수 값 바꾸기
        </button>
        <br />
        <button
          onClick={() => {
            this.state.favorite = "떡볶이 맛집";
            // this.forceUpdate();
          }}
        >
          일반변수 값 바꾸기 - 1{" "}
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ favorite: "변경된맛집" });
          }}
        >
          setState() 이용하여 state 변수 값 바꾸기
        </button>
        <br />
      </div>
    );
  }
}

export default App;

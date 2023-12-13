// App1_Book.js
import "../App.css";

/*********************************
  ***** Props
            : 컴포넌트에 전달한 데이터 객체

  * 컴포넌트와 엘리먼트 개념
 */

function Book(props) {
  return (
    <div>
      <h2>책 제목 : {props.title}</h2>
      <h4>저자 : {props.writer}</h4>
      <h6>가격 : {props.price}</h6>
      <hr />
      <h2>{`책 제목 : ${props.title}`}</h2>
      <hr />
      <hr />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Book title="자바" writer="java" price="10000" />
      <Book title="파이썬" writer="python" price="20000" />
      <Book title="리액트" writer="react" price="30000" />
    </div>
  );
}

export default App;

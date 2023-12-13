// App3_MyHeader.js

/**
    props : 컴포넌트에 전달되는 데이터 객체
            - 읽기 전용
            - props 변경은 안됨
 */

// MyHeader 컴포넌트
/**
 * <header>
 *      <h1> 제목 </h1>
 *      <p> 내용 </p>
 * </header>
 *
 * App 컴포넌트 안에서  MyHeader 엘리먼트를 2개 생성하여 다른 내용이 출력될 수 있도록
 */
import "../App.css";
function MyHeader(props) {
  //   console.log(props);
  // props.title = "변경된 제목"
  let mytitle = props.title + "변경";
  return (
    <header>
      <h1> {mytitle} </h1>
      <p> {props.content} </p>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <MyHeader content="안녕" title="KO" />
      <MyHeader content="HI" title="EN" />
    </div>
  );
}

export default App;

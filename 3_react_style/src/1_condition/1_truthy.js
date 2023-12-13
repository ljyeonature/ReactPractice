// 1_condition / 1_truthy.js

function MemberGreeting(props) {
  return <h1>오늘도 반갑습니다</h1>;
}

function GuestGreeting(props) {
  return <h2>회원가입을 해주세요</h2>;
}

function Greeting(props) {
  const isLogin = "false";
  /**
   * 오늘도 반갑습니다.                     회원가입을 해주세요
   * true       // true                    false      // false
   * {}         // true                    ''         // false
   * []         // true                     0          // false
   * 1          // true                     null       // false
   * -1         // true                     NaN        // false
   * "0"        // true                     undefined  // false
   * "false"    // true
   *
   */

  if (isLogin) return <MemberGreeting />;
  else return <GuestGreeting />;
}

function App() {
  return <Greeting />;
}

export default App;

// App_useEffect.js

import { useEffect, useState } from "react";

/**
 *  useEffect
 *      - 클래스 컴포넌트에 생명주기함수을 대체
 *
 *      - useEffect( 이벤트함수, 의존성 배열 )
 *
 *          ` 의존성배열 없는 경우 : 컴포넌트가 업데이트 할 때마다 이벤트 함수 호출됨
 *          ` 의존성배열 있는 경우 : 배열이 업데이트 할 때마다 이벤트 함수 호출됨
 *          ` 의존성배열 [] 빈 배열인 경우 : 처음에만 호출됨
 */

function Form() {
  const [realname, setRealname] = useState("ㄲ");
  const [nickname, setNickname] = useState("ㅌ");

  // 의존성배열 없는 경우 : 모든 변수 변경
  //   useEffect(() => {
  //     console.log(`본명 : ${realname} \t 별명 : ${nickname}`);
  //   });

  // 의존성배열 있는 경우 : 배열에 있는 변수만 변경됨.
  //   useEffect(() => {
  //     console.log(`본명 : ${realname} \t 별명 : ${nickname}`);
  //   }, [nickname]);

  // 의존성배열 [] 빈 배열인 경우 : 처음에만 호출 -> 그 뒤로 변경 안됨
  //   useEffect(() => {
  //     console.log(`본명 : ${realname} \t 별명 : ${nickname}`);
  //   }, []);

  return (
    <div>
      <span>본명 : {realname}</span>
      <input
        type="text"
        value={realname}
        onChange={(event) => {
          setRealname(event.target.value);
        }}
      ></input>
      <hr />
      <span>별명 : {nickname}</span>
      <input
        type="text"
        value={nickname}
        onChange={(event) => {
          setNickname(event.target.value);
        }}
      ></input>
    </div>
  );
}

function App() {
  return <Form />;
}

export default App;

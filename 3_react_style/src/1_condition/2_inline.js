// 2_inline.js
/**
 * inline condition (인라인조건)
 *      [1] if 문과 동일한 효과 -> &&연산자
 *
 *      [2] if~elsle -> 삼항연산자
 */

import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count >= 1 && <h4> 현재 갯수 : {count}</h4>}
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}

function MailBox(props) {
  const unreadMessage = props.data;

  return (
    <div>
      <h1>나의 메일함</h1>
      {unreadMessage.length > 0 && (
        <h3>{unreadMessage.length}개의 읽지 않은 메세지가 있습니다</h3>
      )}
    </div>
  );
}

function App() {
  let msg = [];
  let msg2 = ["회의메일", "광고", "친분"];

  return (
    <div>
      <Counter />
      <Counter />
      <hr />
      <MailBox data={msg} />
      <MailBox data={msg2} />
    </div>
  );
}

export default App;

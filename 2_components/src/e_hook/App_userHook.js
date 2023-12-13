// App_userHook.js

import { useEffect, useState } from "react";

/**
 * 사용자 정의 훅
 *      -useXXXX
 */

function useCounter(initValue) {
  const [count, setCount] = useState(initValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => count - 1);

  return [count, increaseCount, decreaseCount];
}

const MAX = 5;
const MIN = 0;

function Room() {
  const [count, increaseCount, decreaseCount] = useCounter(0);

  const [isFull, setIsFull] = useState(false);
  const [isMin, setIsMin] = useState(false);

  useEffect(() => {
    setIsFull(count >= MAX);
    setIsMin(count === MIN);
    console.log(`isFull : ${isFull}`);
    console.log(`현재 수 : ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 20 }}>
      <p>{`총 ${count}명 입실`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입실
      </button>
      <button onClick={decreaseCount} disabled={isMin}>
        퇴실
      </button>
      <hr />
      {isFull && <p style={{ color: "red" }}>룸이 다 찼습니다</p>}
      {isMin && <p style={{ color: "blue" }}>룸이 비었습니다</p>}
    </div>
  );
}

function App() {
  return <Room />;
}

export default App;

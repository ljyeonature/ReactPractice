//App4_연습_func.js

import { useState } from "react";

function App() {
  var [cnt, setCnt] = useState(0);
  return (
    <div>
      <h1>값 : {cnt}</h1>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCnt(cnt - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
